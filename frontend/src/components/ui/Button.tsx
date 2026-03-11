import clsx from "clsx";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

type BaseProps = {
    variant?: "primary" | "outline" | "ghost";
    size?: "default" | "sm" | "icon";
    className?: string;
    children: React.ReactNode;
};

// Internal discriminated union
type InternalButtonProps = BaseProps &
    React.ButtonHTMLAttributes<HTMLButtonElement> & {
        href?: undefined;
        external?: undefined;
    };

type InternalAnchorProps = BaseProps &
    React.AnchorHTMLAttributes<HTMLAnchorElement> & {
        href: string;
        external?: boolean;
    };

type InternalLinkProps = BaseProps &
    React.ButtonHTMLAttributes<HTMLAnchorElement> & {
        to?: string;
    };

// Exported props type
export type ButtonProps =
    | InternalButtonProps
    | InternalAnchorProps
    | InternalLinkProps;

const Button: React.FC<ButtonProps> = ({
    variant = "primary",
    size = "default",
    className,
    children,
    ...props
}) => {
    const classes = clsx(
        "rounded-lg transition cursor-pointer flex items-center gap-2 justify-center hover:scale-[1.02]",

        variant === "primary" && "bg-primary text-white hover:opacity-90",

        variant === "outline" && "border hover:bg-muted",

        variant === "ghost" && "hover:bg-muted",

        size === "default" && "px-6 py-3",

        size === "sm" && "px-3 py-1.5 text-sm",

        size === "icon" && "p-2",

        className,
    );

    if ("to" in props && props.to) {
        const { to, ...rest } = props;

        return (
            <Link to={to} className={classes} {...rest}>
                {children}
            </Link>
        );
    }

    if ("href" in props && "external" in props) {
        const { href, external, ...rest } = props;

        // Explicitly cast to AnchorProps to avoid spreading button-only props
        const anchorProps =
            rest as React.AnchorHTMLAttributes<HTMLAnchorElement>;

        return (
            <a
                href={href}
                className={classes}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                {...anchorProps}
            >
                {children}
                {external && <ExternalLink className="w-4 h-4" />}
            </a>
        );
    }

    const buttonProps = props as React.ButtonHTMLAttributes<HTMLButtonElement>;
    return (
        <button className={classes} {...buttonProps}>
            {children}
        </button>
    );
};

export default Button;
