type DateType = Date | string | number;

/**
 * @method zero
 * @param {Number | String} value
 * @returns {String} number string with leading zero
 * @description add leading zero
 */
const zero = (value: number | string) => (value.toString().length === 1 ? `0${value}` : value);

/**
 * @method dateFormater
 * @param {String} format
 * @param {DateType} date
 * @returns formatted date string
 * @description format date type value
 */
export function dateFormater(format: string, date: DateType = Date.now()): string {
    const allowForm = date.toString().replace(/\.|\-|\s+/g, '/');
    const _date = new Date(allowForm);

    return format.replace(/(yyyy|mm|dd|MM|DD|H|i|s)/g, (t: string): any => {
        switch (t) {
            case 'yyyy':
                return _date.getFullYear();
            case 'mm':
                return _date.getMonth() + 1;
            case 'dd':
                return _date.getDate();
            case 'MM':
                return zero(_date.getMonth() + 1);
            case 'DD':
                return zero(_date.getDate());
            case 'H':
                return zero(_date.getHours());
            case 'i':
                return zero(_date.getMinutes());
            case 's':
                return zero(_date.getSeconds());
            default:
                return '';
        }
    });
}

/**
 * @method convertTZ
 * @param {DateType} date
 * @param {String} tzString
 * @returns {Date} converted datetime
 * @description convert TimeZone
 */
export function convertTZ(date: DateType, tzString: string): Date {
    return new Date((typeof date === 'string' || typeof date === 'number' ? new Date(date) : date).toLocaleString('en-US', { timeZone: tzString }));
}
