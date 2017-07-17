import sierotki from 'sierotki';
export default (text) => {
    return sierotki.Sierotki.orphansFix(text).split('&nbsp;').join('\xa0');
}