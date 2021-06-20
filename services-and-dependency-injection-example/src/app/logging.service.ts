export class LoggingService{
    logStatusChange(status: string){
        console.log('Logging Service :: A server status changed, new status: ' + status);
    }

}