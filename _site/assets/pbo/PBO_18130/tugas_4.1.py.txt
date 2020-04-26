a = [1,2,3]
print(a)

a.append(5)
print(a)

list1=[1,2,3,4,5]
list2=['rambutan','langsa','salak','durian','apel']

list1.extend(list2)

c = [1,2,3]
print(c)

c.insert(0,12)
print(c)

 ### Perbedaan antara fungsi Append,extend,dan insert
# append berfungsi untuk menambahkan elemen ke daftar
# extend berfungsi untuk memperpanjang daftar dengan menambahkan elemen dari iterable
# insert berfungsi untuk menyisipkan data baru di tengah araay list 



## fungsi reverse dan sort
# fungsi reversed() berfungsi untuk menghasilkan iterator yang berisi kembalikan dari suatu sequence sedangkan sort berfungsi untuk mengurutkan suatu iterabel baik secara naik maupun turun

### contoh kodenya dari reverse
def reverse(string):
	reverse_string = ""
	for i in string:
		reverse_string = i+reversed_string
	print("reversed string is:",reversed_string)

string = input("enter a string:")
print("enterd string",string)
reverse(string)

### contoh kode dari sort
pylist = ['e','a','u','i','o']
word = 'python'

print(sorted(pylist))
print(sorted(word))
print(sorted(pylist, reverse=True))

def takesecond(elem):
	return elem[1]

random = [(2,2), (3,4), (4,1), (1,3)]
sortedlist = sorted(random, key
=takesecond)
print('sorted list:', sortedlist)
