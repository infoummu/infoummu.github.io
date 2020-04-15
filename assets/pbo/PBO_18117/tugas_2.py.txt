# file: operator_aritmatika.py

# Ambil input untuk mengisi nilai
a = input("Inputkan nilai a: ")
b = input("Inputkan nilai b: ")

# Menggunakan operator penjumlahan
c = a + b
print "Hasil %d + %d = %d" % (a,b,c)

# Operator Pengurangan
c = a - b
print "Hasil %d - %d = %d" % (a,b,c)

# Operator Perkalian
c = a * b
print "Hasil %d * %d = %d" % (a,b,c)

# Operator Pembagian
c = a / b
print "Hasil %d / %d = %d" % (a,b,c)

# Operator Sisa Bagi
c = a % b
print "Hasil %d %% %d = %d" % (a,b,c)

# Operator Pangkat
c = a ** b
print "Hasil %d ** %d = %d" % (a,b,c)


# file: operator_penugasan.py

# Ambil input untuk mengisi nilai
a = input("Inputkan nilai a: ")
# ^ 
# | contoh operator penugasan untuk mengisi nilai

print "Nilai a = %d" % a

# Coba kita jumlahkan nilai a dengan opertor penugasan
a += 5
# ^
# |
# contoh operator penugasan untuk menjumlahkan

# Setelah nilai a ditambah 5, coba kita lihat isinya
print "Nilai setelah ditambah 5:"
print "a = %d" % a




# file: operator_pembanding.py
a = input("Inputkan nilai a: ")
b = input("Inputkan nilai b: ")

# apakah a sama dengan b?
c = a == b
print "Apakah %d == %d: %r" % (a,b,c)

# apakah a < b?
c = a < b
print "Apakah %d < %d: %r" % (a,b,c)

# apakah a > b?
c = a > b
print "Apakah %d > %d: %r" % (a,b,c)

# apakah a <= b?
c = a <= b
print "Apakah %d <= %d: %r" % (a,b,c)

# apakah a >= b?
c = a >= b
print "Apakah %d >= %d: %r" % (a,b,c)

# apakah a != b?
c = a != b
print "Apakah %d != %d: %r" % (a,b,c)


#file : operator_logika.py
a = True
b = False

# Logika AND
c = a and b
print "%r and %r = %r" % (a,b,c)

# Logika OR
c = a or b
print "%r or %r = %r" % (a,b,c)

# Logika Not
c = not a
print "not %r  = %r" % (a,c)






# file : operator_bitwise
a = input("Masukan nilai a: ")
b = input("Masukan nilai b: ")

# Operasi AND
c = a & b
print "a & b = %s" % c

# Operasi OR
c = a | b
print "a | b = %s" % c

# Operasi XOR
c = a ^ b
print "a ^ b = %s" % c

# Operasi Not
c = ~a
print "~a = %s" % c

# Operasi shift left (tukar posisi biner)
c = a << b
print "a << b = %s" % c

# Operasi shift right (tukar posisi biner)
c = a >> b 
print "a >> b = %s" % c


# file : operator_ternary
umur = input("berapa umur kamu? ")
aku = "bocah" if umur < 10 else "dewasa"
print aku
