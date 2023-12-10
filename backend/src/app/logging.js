import winston, { format } from "winston";

const customFormat = format.printf((info) => {
    const timestamp = new Date(info.timestamp).toLocaleString('id-ID', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
    });

    return `[${timestamp}] ${info.level}: ${info.message}`;
});

export const logger = winston.createLogger({
    level: "info",
    format: winston.format.combine(
        format.timestamp(),
        customFormat
    ),
    transports: [new winston.transports.Console({})],
});
