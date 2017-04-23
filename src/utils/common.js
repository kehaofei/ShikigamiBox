let ENABLE_LOG = 1;

export function log (info) {
  if (ENABLE_LOG) {
    console.log(info);
  }
}
