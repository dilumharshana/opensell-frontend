export const connectPrinter = (ePosDevice) => {
  let ePosDev = new window.epson.ePOSDevice();
  ePosDevice.current = ePosDev;

  ePosDev.connect(printerIPAddress, printerPort, (data) => {
    if (data === "OK") {
      ePosDev.createDevice(
        "local_printer",
        ePosDev.DEVICE_TYPE_PRINTER,
        { crypto: true, buffer: false },
        (devobj, retcode) => {
          if (retcode === "OK") {
            return devobj;
          } else {
            throw retcode;
          }
        }
      );
    } else {
      throw data;
    }
  });
};
