declare module 'part:@sanity/*';

declare module 'config:@six-socks-studio/sanity-plugin-intl-input' {
  const config: import('./types').Ti18nConfig & {
    withTranslationsMaintenance?: boolean;
  };
  export default config;
}

declare module 'part:@sanity/base/schema' {
  const schemas: {
    _original: {
      types: import('./types').TSchema[];
    };
  };
  export default schemas;
}

declare module '*.scss' {
    const c: { [key: string]: string; };
    export = c;
}

declare module '*.css' {
  const c: { [key: string]: string; };
  export = c;
}