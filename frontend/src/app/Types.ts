export default interface Response {
    json: {
        hash: string;
        secretText: string;
        createdAt: string;
        expiresAt: string;
        remainingViews: number;
    };
    xml: string;
}