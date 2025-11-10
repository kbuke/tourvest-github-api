export function ImgComponent({
    src,
    className,
    alt
}){
    return(
        <img 
            src={src}
            className={className}
            alt={alt}
        />
    )
}