export default class ServiceUtils{
    static getBaseUrl(): string{
        return "http://localhost:8081/api/v1";
    }
    static getNotFoundMessage(): string{
        return "";
    }
}