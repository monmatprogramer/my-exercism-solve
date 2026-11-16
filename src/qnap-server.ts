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

export function qnapServer() {}
