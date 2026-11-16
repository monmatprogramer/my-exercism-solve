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
  rpm: string;
  type: "hdd";
};

export function qnapServer() {
  const user: StandardUser = {
    name: "monmat",
    role: "user",
  };
  manageServer(user);
}
