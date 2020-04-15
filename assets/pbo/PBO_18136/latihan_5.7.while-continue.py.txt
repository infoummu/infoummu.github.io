status=False
batas=3
tabel_username =["admin","sayaadmin","sayajugaadmin"]
tabel_password =["ummu","ternate","akademik"]
while batas > 0:
  tanya_username=input("masukkan user name anda: ")
  tanya_password=input("masukkan password anda: ")
  for password in tabel_password:
     for username in tabel_username:
       if tanya_password == password and tanya_username ==a_username:
         print("selamat anda berhasil login")
         status=True
         break
  if not status:
    print("password & username yang anda masukan salah, silahkan login kembali")
    batas=batas -1
    continue
  else:
    break
