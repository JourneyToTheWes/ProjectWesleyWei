import clsx from "clsx";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "primary" | "outline" | "ghost";
    size?: "default" | "icon";
};

const Button: React.FC<ButtonProps> = ({
    variant = "primary",
    size = "default",
    className,
    ...props
}) => {
    return (
        <button
            className={clsx(
                "rounded-lg transition cursor-pointer flex items-center justify-center hover:scale-[1.02]",

                variant === "primary" &&
                    "bg-primary text-white px-6 py-3 hover:opacity-90",

                variant === "outline" && "border px-6 py-3 hover:bg-muted",

                variant === "ghost" && "hover:bg-muted",

                size === "default" && "px-6 py-3",

                size === "icon" && "p-2",

                className,
            )}
            {...props}
        />
    );
};

export default Button;
