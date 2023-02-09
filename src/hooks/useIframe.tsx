import { useFilters } from "./useFilterConfig";

type useIframeType = {
    src: string;
    width?: number;
    height?: number;
} & React.DetailedHTMLProps<
    React.IframeHTMLAttributes<HTMLIFrameElement>,
    HTMLIFrameElement
>;

export const useIframe = ({
    src,
    width = 450,
    height = 200,
    ...props
}: useIframeType) => {
    const {
        filter: { from, to, refresh },
    } = useFilters();

    return () => (
        <iframe
            src={src.concat(
                `&from=${from}&to=${to}${refresh ? `&refresh=${refresh}` : ""}`
            )}
            width={width}
            height={height}
            frameBorder="0"
            scrolling="none"
            style={{ border: "1px solid #ccccdc12", borderRadius: "3px" }}
            {...props}
        />
    );
};
