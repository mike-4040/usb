import HID from 'node-hid';

const devices = HID.devices();

// devices.forEach(console.log)

const scannerInfo = devices.find(
  ({ vendorId, productId }) => vendorId === 1550
);

if (scannerInfo) {
  console.log(scannerInfo);
  scanner = new HID.HID(scannerInfo.path);
  console.log(scanner.getFeatureReport());
}
