
// millisecond to -> conversion.
const _MS_PER_DAY = 1000 * 60 * 60 * 24;
const _MS_PER_HOUR = 1000 * 60 * 60;
const _MS_PER_MINUTE = 1000 * 60;
const _MS_PER_SECOND = 1000;

export var getWatchedAtDate = (date) => {
    var currentDate = new Date();
    console.log(`currentDate: ${currentDate}`);
    var streamStartedAtDate = new Date(date);
    console.log(`streamStartedAtDate: ${streamStartedAtDate}`);

    var timeDiff = currentDate.getTime() - streamStartedAtDate.getTime();

    var days = Math.floor(timeDiff/ _MS_PER_DAY);
    timeDiff -= days * _MS_PER_DAY;

    var hours = Math.floor(timeDiff/ _MS_PER_HOUR);
    timeDiff -= hours * _MS_PER_HOUR;

    var minutes = Math.floor(timeDiff/ _MS_PER_MINUTE);
    timeDiff -= minutes * _MS_PER_MINUTE;

    var seconds = Math.floor(timeDiff/ _MS_PER_SECOND);
    timeDiff -= seconds * _MS_PER_SECOND;

    var watchedAtDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), hours, minutes, seconds);
    console.log(`watchedAtDate: ${watchedAtDate}`);

    return formatDate(watchedAtDate);
};

export var formatDate = (date) => {
    var dateObj = new Date(date);

    // necessary to +1 offset month since it is zero-based.
    var month = (dateObj.getMonth() < 10 ? "0" : "") + (dateObj.getMonth() + 1);
    var date = (dateObj.getDate() < 10 ? "0" : "") + dateObj.getDate();
    var year = dateObj.getFullYear();
    var hours = (dateObj.getHours() < 10 ? "0" : "") + dateObj.getHours();
    var minutes  = (dateObj.getMinutes() < 10 ? "0" : "") + dateObj.getMinutes();
    var seconds = (dateObj.getSeconds() < 10 ? "0" : "") + dateObj.getSeconds();

    return `${month}/${date}/${year} | ${hours}:${minutes}:${seconds}`;
};
