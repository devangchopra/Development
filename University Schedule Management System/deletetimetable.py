from tkinter import *
from tkinter.messagebox import *
from tkinter.ttk import*
import sqlite3

class timetable:
    def remove(self):
        s="delete from timetable where dayofweek='"+self.cb1.get()+"' and teachername='"+self.cb2.get()+"' and subjectcode="+self.cb3.get()+""
        self.cr.execute(s)
        self.conn.commit()
        showinfo("Time Table Managemet","Record Deleted Succesfully")
    def __init__(self):
        self.root=Tk()
        self.root.geometry("400x400")
        p=["Select Day Of Week"]
        self.conn=sqlite3.connect("mytimetabledata.sqlite3")
        s="select distinct dayofweek from timetable"
        self.cr=self.conn.cursor()
        self.cr.execute(s)
        result=self.cr.fetchall()
        for r in result:
            p.append(r[0])

        b = ["Select Teacher's Name"]
        self.conn = sqlite3.connect("mytimetabledata.sqlite3")
        s = "select distinct teachername from timetable"
        self.cr = self.conn.cursor()
        self.cr.execute(s)
        result = self.cr.fetchall()
        for r in result:
            b.append(r[0])

        d = ["Select Subject Code"]
        self.conn = sqlite3.connect("mytimetabledata.sqlite3")
        s = "select distinct subjectcode from timetable"
        self.cr = self.conn.cursor()
        self.cr.execute(s)
        result = self.cr.fetchall()
        for r in result:
            d.append(r[0])

        e = ["Select Slot"]
        self.conn = sqlite3.connect("mytimetabledata.sqlite3")
        s = "select distinct slot from timetable"
        self.cr = self.conn.cursor()
        self.cr.execute(s)
        result = self.cr.fetchall()
        for r in result:
            e.append(r[0])



        self.lb1=Label(self.root,text="Day Of Week")
        self.cb1=Combobox(self.root,values=p,state="readonly",text="Select Day Of Week")
        self.cb2=Combobox(self.root,values=b,state="readonly",text="Select Teacher's Name")
        self.cb3=Combobox(self.root,values=d,state="readonly",text="Select Subject Code")
        self.cb4=Combobox(self.root,values=e,state="readonly",text="Select Slot")
        self.cb1.current(0)
        self.cb2.current(0)
        self.cb3.current(0)
        self.cb4.current(0)
        self.lb3=Label(self.root,text="Subject Code")
        self.lb2=Label(self.root,text="Teacher's Name")
        self.lb4=Label(self.root,text="Select Slot")
        self.bt2=Button(self.root,text="Delete",command=self.remove)
        self.lb1.grid(row=0,column=0)
        self.cb1.grid(row=0,column=1)
        self.lb2.grid(row=1,column=0)
        self.cb2.grid(row=1,column=1)
        self.lb3.grid(row=2,column=0)
        self.cb3.grid(row=2,column=1)
        self.lb4.grid(row=3,column=0)
        self.cb4.grid(row=3,column=1)
        self.bt2.grid(row=4,column=1)
        self.root.mainloop()



