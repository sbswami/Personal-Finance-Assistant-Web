export interface User {
  fullName: string;
  dob: string;
  email: string;
  password: string;
  phone: string;
  businessName: string;
}

export function checkError(user: User){
  if(
    user.fullName === '' ||
    user.dob === '' ||
    user.email === '' ||
    user.phone === '' ||
    user.businessName === ''||
    user.password === ''
  ) {
    return true;
  }
  return false;
}
