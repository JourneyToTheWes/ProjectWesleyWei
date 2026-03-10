import clsx from "clsx";
import { ExternalLink } from "lucide-react";

type BaseProps = {
    variant?: "primary" | "outline" | "ghost";
    size?: "default" | "icon";
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

// Exported props type
export type ButtonProps = InternalButtonProps | InternalAnchorProps;

const Button: React.FC<ButtonProps> = ({
    variant = "primary",
    size = "default",
    className,
    children,
    ...props
}) => {
    const classes = clsx(
        "rounded-lg transition cursor-pointer flex items-center gap-2 justify-center hover:scale-[1.02]",

        variant === "primary" &&
            "bg-primary text-white px-6 py-3 hover:opacity-90",

        variant === "outline" && "border px-6 py-3 hover:bg-muted",

        variant === "ghost" && "hover:bg-muted",

        size === "default" && "px-6 py-3",

        size === "icon" && "p-2",

        className,
    );

    if ("href" in props) {
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
