export interface AuthResponse {
    member: {
        id: number,
        name: string,
        email: string,
        access_token: string,
        expires_in: number
    };
}
