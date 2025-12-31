import NeonText from "@/components/text";
import { Spinner } from "@/components/ui/spinner";

export default function Home() {
    return (
        <div className="relative w-screen h-screen">
            <div className="font-mono flex flex-col justify-center items-center h-screen gap-y-5">
                <NeonText text="RED0X PERSONAL BLOG" />
            </div>
            <div className="absolute bottom-16 left-0 right-0">
                <div className="flex flex-row justify-center items-center gap-x-1.5">
                    <Spinner className="size-6" />
                    <h1 className="text-sm">
                        Loading...
                    </h1>
                </div>
            </div>
        </div>
    );
};