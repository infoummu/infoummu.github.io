#pembuatan fungsi
def hitung_gaji():
     nama =(input("masukan Nama anda :"))
     gol=(input("masukan golongan:"))
     if gol =="1":
        gaji=1000000
        tunjangan= 250000
        total=gaji+tunjangan
        print(f"total gaji yang anda terima {total}")
     elif gol == "2":
        gaji = 2000000
        tunjangan = 500000
        total = gaji+tunjangan
        print(f"total gaji yang anda terima {total}")
     elif gol == "3" :
        gaji =3000000
        tunjangan = 700000
        total=gaji+tunjangan
        print(f"total gaji yang anda terima {total}")
     else:
        print("mohon masukan golongan anda")
 #pemanggil fungsi
print("selamat Datang di Program Hitung Gaji")
print("--------------------------")
devisi=input("masukan devisi anda:")
if devisi == "kantor":
     hitung_gaji()
elif devisi =="lapangan":
      hitung_gaji()
      transportasi=100000
      print("tambahan tunjangan lapangan",transportasi)
else:
    print("devisi yang anda masukan salah")