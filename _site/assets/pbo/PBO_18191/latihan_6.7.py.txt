#pemangilan fungsi
print("Selamat Datang di Program Hitung Gaji")
print("--------------------------")
devisi=input("masukan devisi anda")
if devisi == "kantor":
     hitung_gaji()
elif devisi =="lapangan":
     hitung_gaji()
     transportasi=100000
     print("tambahan tunjangan lapangan", transportasi)
else:
     print("devisi yang ada masukan salah") 