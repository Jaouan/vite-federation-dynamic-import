export const importRemote = async (url, module = "./App", opts = {}) => {
    const scope = url; // Use URL as scope.

    const viteFederation = await import('__federation__').catch(
        (err) => console.error("Failed to import __federation__. You need to configure at least one (dummy) remote to enable host capacility.", err)
    );

    viteFederation.__federation_method_setRemote(scope, {
        format: 'esm',
        from: 'vite',
        ...opts,
        url: () => Promise.resolve(url),
    });

    return viteFederation.__federation_method_getRemote(scope, module)
};
