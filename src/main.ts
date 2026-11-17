function main() {
  const data: Record<string, unknown> = {
    serverName: "QNAP-NAS-433",
    uptime: 99.9,
    lastError: null,
    storage: {
      disk1: "Healthy",
      disk2: null,
      diagnostics: {
        temperature: 45,
        badSectors: null,
      },
    },
  };
}

main();
