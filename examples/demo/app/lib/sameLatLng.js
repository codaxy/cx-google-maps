export function sameLatLng(a, b) {
    if (a === b) return true;
    return a && b ? a.lat == b.lat && a.lng == b.lng : false;
}
