import os from 'os';
export function getCurrentOSName() {
    return os.platform();
}
export function getCurrentOSVersion() {
    return os.version();
}
