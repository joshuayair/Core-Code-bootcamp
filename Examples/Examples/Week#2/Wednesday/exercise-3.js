function validSpacing(s) {
  // write your code here
    if (s == "")
    return true
  else
    return !s.split(" ").includes("")
}