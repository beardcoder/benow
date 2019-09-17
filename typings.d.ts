declare module '*.css' {
    interface IClassNames {
        [className: string]: string;
    }

    const classNames: IClassNames;
    export = classNames;
}

declare module '*.png' {
    const value: any;
    export default value;
}

declare module '*.jpg' {
    const value: any;
    export default value;
}

declare module '*.jpeg' {
    const value: any;
    export default value;
}

declare module '*.svg' {
    const value: any;
    export default value;
}

declare module '*.vue' {
    import Vue from 'vue';
    export default Vue;
}

declare module 'vanilla-lazyload';
