#operator arimatika

#input mengisi nilai
x=int(input("masukan nilai x: "))
y=int(input("masukan nilai y: "))

#operator penjumlahan
jumlah=x + y
print("hasil jumlah:", jumlah)

#operator pengurangan
kurang=x - y
print("hasil kurang:", kurang)

#operator perkalian
kali=x * y
print("hasil kali:", kali)

#operator pembagian
bagi=x / y
print("hasil bagi:", bagi)

#operator perpangkatan
pangkat_x= x**4
print("hasil pangkat:", pangkat_x)

#operator sisa bagi
sisa_bagi=x % y
print("hasil sisa bagi:", sisa_bagi)


#operator penugasan

nilai_x=int(input("masukan nilai x: "))

#operator penjumlahan
nilai_x +=20
print("hasil jumlah: ", nilai_x)

nilai_x=int(input("masukan nilai x: "))
#operator pengurangan
nilai_x -=10
print("hasil kurang:",nilai_x)

nilai_x=int(input("masukan nilai x: "))
#operator perkalian
nilai_x *=10
print("hasil kali:",nilai_x)

nilai_x=int(input("masukan nilai x: "))
#operator pembagian
nilai_x /=30
print("hasil bagi:",nilai_x)

nilai_x=int(input("masukan nilai x: "))
#operator perpangkatan
nilai_x **=5
print("hasil pangkat:",nilai_x)

nilai_x=int(input("masukan nilai x: "))
#operator sisa bagi
nilai_x %=35
print("hasil sisa bagi:",nilai_x)


#operator perbandingan

x=int(input("masukan nilai x: "))
y=int(input("masukan nilai y: "))

#operator lebih besar (>)
z= x > y
print("nilai x {} > nilai y {} bernilai {}".format(x,y,z))

#operator lebih kecil (<)
z= x < y
print("nilai x {} < nilai y {} bernilai {}".format(x,y,z))

#operator sama dengan(==)
z= x == y
print("nilai x {} == nilai y {} bernilai {}".format(x,y,z))

#operator tidak sama dengan (!=)
z= x != y
print("nilai x {} != nilai y {} bernilai {}".format(x,y,z))

#operator lebih besar sama dengan (>=)
z= x >= y
print("nilai x {} >= nilai y {} bernilai {}".format(x,y,z))

#operator lebih kecil sama dengan (<=)
z= x <= y
print("nilai x {} <= nilai y {} bernilai {}".format(x,y,z))