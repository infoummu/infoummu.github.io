status=False
batas=4
pengguna =["Rosnia La Bania"]
kata_sandi =["12345678"]
while batas > 0:
  pwd1=input("masukkan nama pengguna: ")
  pwd2=input("masukkan kata sandi anda: ")
  for pengguna in pengguna:
     for kata_sandi in kata_sandi:
       if pwd1 == pengguna and kata_sandi == kata_sandi:
         print("selamat anda berhasil masuk di server BANK BRI")
         status=True
         break
  if not status:
    print("nama pengguna & kata_sandi yang anda masukan salah, silahkan login kembali")
    batas=batas -1
    continue
  else:
    break
