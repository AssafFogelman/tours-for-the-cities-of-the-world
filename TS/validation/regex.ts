let emailRegex = new RegExp(`\\S+@\\S+\\.\\S+`);
let passwordRegex = new RegExp(
  `^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,20}$`
);
