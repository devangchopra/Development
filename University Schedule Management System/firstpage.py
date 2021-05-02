from tkinter import *
from tkinter.ttk import *
from tkinter.messagebox import *

import addsub
import viewsub
import addtimetable
import showtimetable
import addprog
import viewprog
import deleteprog
import deletesubjects
import deletetimetable

class startpage:

    def fire1(self):
        obj=addsub.demo()

    def fire2(self):
        obj=viewsub.demo()

    def fire3(self):
        obj=addtimetable.addtimetabele()

    def fire4(self):
        obj=showtimetable.demo()

    def fire5(self):
        obj=addprog.addprogram()

    def fire6(self):
        obj=viewprog.demo()

    def fire7(self):
        obj=deleteprog.deleteprogram()

    def fire0(self):
        obj=deletesubjects.deletesub()

    def fire9(self):
        obj=deletetimetable.timetable()


    def __init__(self):
        self.root=Tk()
        self.root.geometry("1200x800")

        self.mymenu = Menu(self.root)
        self.root.title("Menu Window")
        self.root.config(menu=self.mymenu)

        submenu1 = Menu(self.mymenu, tearoff=False)
        self.mymenu.add_cascade(label="Manage Course", menu=submenu1)
        submenu1.add_command(label="Add New Program" , command=self.fire5) #----Done
        submenu1.add_command(label="View All Programs",command=self.fire6)#----Done
        submenu1.add_command(label="Delete Programs", command=self.fire7)#---Done

        submenu2 = Menu(self.mymenu, tearoff=False)
        self.mymenu.add_cascade(label="Manage Subjects", menu=submenu2)
        submenu2.add_command(label="Add New Subjects",command=self.fire1) #---Done
        submenu2.add_command(label="View Subject Course Wise",command=self.fire2) #--Done
        submenu2.add_command(label="Delete Subjects",command=self.fire0) #---Done

        submenu3 = Menu(self.mymenu, tearoff=False)
        self.mymenu.add_cascade(label="Manage Time Table", menu=submenu3)
        submenu3.add_command(label="Add New Time Table",command=self.fire3) #---Done
        submenu3.add_command(label="View Time Table",command=self.fire4)#----Done
        submenu3.add_command(label="Delete Time Table",command=self.fire9)#---Done



        self.root.mainloop()
#-------------------------------------------------
startpage()
