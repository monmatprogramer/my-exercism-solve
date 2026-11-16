//--------
// Check return type
//-------
type Admin = {
  name: string;
  role: "admin";
  canDeleteFiles: boolean;
};
type StandardUser = {
  name: string;
  role: "user";
};

type AnyUser = Admin | StandardUser;

// Checck is admin
function isAdmin(user: AnyUser): user is Admin {
  //return
  return user.role === "admin";
}
// Mange server
function manageServer(user: AnyUser) {
  if (isAdmin(user)) {
    console.log("Admin: ", user.canDeleteFiles);
  } else {
    console.log("Standard user: ", user.name);
  }
}
//-----------
// Qnap server check drives
//-----------

type HDD = {
  id: string;
  rpm: number;
  type: "hdd";
};

type SSD = {
  id: string;
  wearLevel: number;
  type: "ssd";
};
type StorageDrive = HDD | SSD;

function isSSD(drive: StorageDrive): drive is SSD {
  return drive.type === "ssd";
}

function checkDriveHealthDrive(drive: StorageDrive) {
  if (isSSD(drive)) {
    console.log(
      `Checking SSD [${drive.id}]. Wear level is [${drive.wearLevel}]%`,
    );
  } else {
    console.log(`Checking HDD [${drive.id}]. Speed is [${drive.rpm}] PRM.`);
  }
}

export function qnapServer() {
  const myServerDrives: StorageDrive[] = [
    { id: "Drive-1", type: "hdd", rpm: 7200 },
    { id: "Drive-2", type: "ssd", wearLevel: 12 },
    { id: "Drive-3", type: "hdd", rpm: 5400 },
  ];
  myServerDrives.forEach(checkDriveHealthDrive);
}
