export default function NeonText({ text = "TEST" }) {
    return (
        <h1 className={`text-3xl`}>
            {text}
        </h1>
    );
};