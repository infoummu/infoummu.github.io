status=False
batas=2
pengguna =["DARMAWAN"]
kata_sandi =["0987654321"]
while batas > 0:
  pwd1=input("masukkan nama pengguna: ")
  pwd2=input("masukkan kata sandi anda: ")
  for pengguna in pengguna:
     for kata_sandi in kata_sandi:
       if pwd1 == pengguna and kata_sandi == kata_sandi:
         print("selamat anda berhasil masuk di server BANK MANDIRI")
         status=True
         break
  if not status:
    print("nama pengguna & kata_sandi yang anda masukan salah, silahkan login kembali")
    batas=batas -1
    continue
  else:
    break
