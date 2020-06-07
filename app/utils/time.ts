const DAY_IN_MILLISECONDS: number = 86400000;

export function formatPostTimestamp(ts: string): string {
    const timestamp: Date = new Date(ts);
    const currentTime: Date = new Date();
    const dayDifference: number = DAY_IN_MILLISECONDS - (currentTime.getTime() % DAY_IN_MILLISECONDS);
    const timestampDifference: number = currentTime.getTime() - timestamp.getTime();

    if (timestampDifference < dayDifference) {
        return formatCurrentDayTimestamp(timestamp);
    } else if (timestampDifference < DAY_IN_MILLISECONDS * 7) {
        return formatCurrentWeekTimestamp(timestamp);
    } else {
        return `${timestamp.getMonth() + 1}/${timestamp.getDate()}/${timestamp.getFullYear()}`
    }
}

function formatCurrentDayTimestamp(timestamp: Date): string {
    let hours: number = timestamp.getHours();
    let period: string = "AM";
    let minutes = timestamp.getMinutes();
    let leadingZero: string = "";

    if (hours > 11) {
        hours -= 12;
        period = "PM";
    }

    if (minutes < 10) {
        leadingZero = "0";
    }

    return `${hours}:${leadingZero}${minutes} ${period}`;
}

function formatCurrentWeekTimestamp(timestamp: Date): string {
    const days: number = Math.floor( (new Date().getTime() - timestamp.getTime()) / DAY_IN_MILLISECONDS );
    let str = "days";

    if (days == 1) {
        str = "day";
    }

    return `${days} ${str} ago`;
}