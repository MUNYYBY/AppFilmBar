import moment from 'moment';
export default class DateFunctions {
  /**
   * @param date:--pass date property to get desired result
   */
  getDate = (date: any) => {
    return moment(date).format('YYYY-MM-DD');
  };

  //convert local to utc
  ToUtc = (date: any) => {
    const utcStr = date.toUTCString();
    return utcStr;
  };

  //To local time
  ToLocalTime = (date: any) => {
    const utcStr1 = date.toString();
    return utcStr1;
  };

  //To get MilliSec.
  GetMill = (date: any) => {
    return date.getUTCMilliseconds();
  };

  //To get date in millisecond
  getTime = (date: any) => {
    const getStr = date.getTime();
    return getStr;
  };

  //millisecond to date
  getDateFromMilli = (date: any) => {
    const getStr = new Date(date);
    const getStr1 = getStr.toUTCString();
    return getStr1;
  };

  // getTime format according to local time
  //English & Australian Dates: DD/MM/YY
  English = (date: any) => {
    return moment(date).format('D/MM/YY');
  };

  //American Dates: MM/DD/YY
  toAmericanDate = (date: any) => {
    return moment(date).format('MM/D/YY');
  };

  //German Dates: DD.MM.YY
  toGermanDate = (date: any) => {
    return moment(date).format('DD.MM.YY');
  };

  //English, Australian & German: Mon, 30th March 2022
  toAustralianTime = (date: any) => {
    return moment(date).format('ddd,MMMM Do, YYYY');
  };

  // alter names according to your need
  FIVE = (date: any) => {
    return moment(date).format('H:mm a');
  };

  SIX = (date: any) => {
    return moment(date).format('h:mm a');
  };
}
