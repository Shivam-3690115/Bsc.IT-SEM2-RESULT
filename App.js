import React, { useState, useEffect } from 'react';
import { Search, User, Award, BookOpen, Calculator, TrendingUp } from 'lucide-react';

const StudentDetailsSystem = () => {
  const [studentData, setStudentData] = useState([]);
  const [rollNumber, setRollNumber] = useState('');
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [error, setError] = useState('');

  const subjects = [
    'Assembly Language Programming',
    'PL/SQL',
    'Introduction to Cultural Activities',
    'Introduction to Sports, Physical Literacy, Health & Fitness and Yoga II',
    'Web Designing',
    'Practical II - (OOPs and web Designing)',
    'OOPs with C++',
    'Principles and Practices of Management',
    'Communication in Digital Age',
    'Fundamental of People\'s Skills',
    'Hindi Bhasha - Kaushal Ke Adhar',
    'Fundamentals of Business I – Introduction to Business'
  ];

  useEffect(() => {
    // Parse the complete student data from the PDF content
    const parseStudentData = () => {
      const rawData = `FYBSCIT 1 /JADHAV MANASVI ASHOK 14 12 20 15 15 12 19 16 16 24 9 14 17 14 12 12 20 12 14 13 16 14
FYBSCIT 2 SHAIKH MOHD TOUSIF MOHD TOUFIQUE 2 0 10 12 0 0 0 0 8 0 0 0 0 0 2 0 0 0 0 4 0 0
FYBSCIT 3 GAONKAR ABDALLA GULAM GAUS 4 4 15 12 8 12 0 10 10 12 12 19 15 22 5 5 0 0 0 5 0 2
FYBSCIT 4 VISHWA MANIKANDAN 8 12 18 16 8 13 15 10 10 14 9 14 12 16 8 12 8 12 10 13 14 15
FYBSCIT 5 PAL ADARSH RAMJANAM 10 16 17 13 15 15 17 10 10 12 14 22 19 14 12 12 20 13 11 12 13 20
FYBSCIT 6 MAURYA GANESH SHATRUDHAN 8 12 14 12 15 3 16 15 12 17 10 16 16 20 8 12 10 12 10 16 15 17
FYBSCIT 7 /KHAN ZAHIDUNNISA MOHD SHAFI 16 22 18 18 17 24 20 16 11 17 16 24 15 18 13 16 20 12 11 16 14 24
FYBSCIT 8 DUBEY AMAN MAHESH PRASAD 12 13 15 17 16 14 19 16 14 21 12 18 16 20 12 14 20 12 8 14 13 17
FYBSCIT 9 YADAV NITIL KUMAR DINESH KUMAR 8 1 14 14 15 12 19 10 10 12 12 18 18 14 8 12 20 12 12 13 10 12
FYBSCIT 10 /YADAV LOVELY ASHOK 13 18 10 14 12 12 15 16 10 12 16 25 10 20 8 12 10 12 14 13 15 15
FYBSCIT 11 /KAZI AIMAN PARVEZ 8 16 20 16 15 12 20 17 10 12 10 15 18 22 14 6 8 14 14 18 14 17
FYBSCIT 12 MONDAL SURESH PRALLAD 15 26 17 18 16 20 22 17 9 12 16 25 18 17 13 13 20 12 13 25 14 18
FYBSCIT 13 /SHINDE SHREYA MANGESH 15 12 18 12 15 14 18 17 11 14 11 17 18 18 12 20 20 12 19 16 20 12
FYBSCIT 14 SHAIKH ZAINULABDDIN SHAMSUDDIN 8 16 14 15 8 12 18 8 11 13 10 15 12 12 8 13 0 1 8 13 8 12
FYBSCIT 15 /SHAIKH ALFIYA GULAM SARWAR 1 13 17 16 15 15 16 10 12 23 14 22 17 15 3 13 20 12 14 13 12 12
FYBSCIT 16 /QURESHI QASHAF ZOYA WASEEM RAJA 11 20 15 14 17 20 19 10 14 16 10 15 17 19 13 13 20 12 16 14 16 22
FYBSCIT 17 GUJJA ADITYA SHANKAR 10 12 17 12 10 3 14 10 8 2 8 12 16 20 10 12 20 12 12 15 14 12
FYBSCIT 18 /SHAIKH ALISHA MOHAMMED HANIF 3 2 18 12 13 12 16 15 10 12 8 13 12 20 1 0 0 7 12 12 0 3
FYBSCIT 19 ANSARI MOHAMMAD MANSOOR ALI ASGAR ALI 0 0 0 0 0 0 0 0 8 0 0 0 0 0 0 0 0 0 0 0 0 0
FYBSCIT 20 KHAN HARIS MOHAMMAD 8 12 15 17 15 13 15 14 10 12 14 21 10 12 10 12 20 12 12 12 14 13
FYBSCIT 21 GUPTA PANKAJ GODHAN 18 29 20 25 16 18 18 16 12 24 17 26 16 22 19 20 20 29 18 27 19 23
FYBSCIT 22 /ANSARI NAAZ BANO IZHAR 12 15 12 13 17 20 20 15 12 16 12 18 10 15 14 12 20 26 18 15 15 20
FYBSCIT 23 /SHAIKH UROOSA MEHMOOD AHMED 15 19 18 16 15 20 20 16 10 13 16 24 18 23 12 12 10 12 14 23 14 20
FYBSCIT 24 /SHAIKH AALIYA ARIF 16 27 18 17 15 15 16 13 10 16 13 20 18 22 14 12 20 12 17 16 16 15
FYBSCIT 25 VADDEBOYINA AARYAN VENKANNA 10 15 17 12 17 23 20 16 10 14 12 19 18 18 14 17 20 17 19 29 20 15
FYBSCIT 26 KAMBLE ATHARVA PRAVIN 8 12 19 12 14 12 14 14 10 12 9 14 16 19 8 12 20 12 16 27 15 20
FYBSCIT 27 /ANSARI AYESHA MOHD ILYAS 0 0 0 0 0 0 0 0 8 0 0 0 0 0 0 0 0 0 0 0 0 0
FYBSCIT 28 GAUD SANGAM KAPILDEO 13 15 14 16 15 17 21 16 10 13 13 20 12 16 12 12 20 12 19 28 15 13
FYBSCIT 29 DUBEY GANESH BRIJENDRA 19 29 20 19 16 25 25 16 10 13 18 28 16 22 19 16 20 21 19 29 19 22
FYBSCIT 30 SHAIKH AYAN WAJID 8 12 13 12 8 13 15 12 8 4 8 12 8 12 8 12 0 0 8 13 8 12
FYBSCIT 49 SOLKAR ARMAAN ASHFAQUE 18 30 20 25 17 26 21 14 12 14 18 28 18 24 18 22 20 30 19 28 17 26
FYBSCIT 54 /ASHRIF SHAMAYARA MOHD SHAMIM 19 29 20 28 15 25 20 15 10 23 18 27 10 23 19 19 20 28 19 29 18 18
FYBSCIT 62 SHAIKH MOHD TALIB MOHD TAYYAB 14 26 17 25 17 23 18 13 10 16 18 28 20 30 15 20 20 13 15 26 17 20
FYBSCIT 64 KHAN REHAN MOHD RAEED 19 29 20 22 15 25 19 13 10 22 16 25 18 30 19 30 10 29 19 29 19 30
FYBSCIT 83 SURYA MUTHUKUMAR 17 23 18 20 16 19 21 14 10 12 12 19 18 19 15 21 20 29 19 29 18 29
FYBSCIT 99 /KHAN UZMA ABDUL AZIZ 16 25 18 24 17 24 19 14 10 23 16 25 17 26 17 18 20 25 15 24 15 16
FYBSCIT 104 SAYYED YASIR SAMEER 17 22 19 19 17 24 20 12 11 17 15 23 18 23 16 26 20 30 19 29 18 24
FYBSCIT 139 SHETTY SATVIK SUDHAKAR 17 20 19 21 15 25 24 16 10 3 18 28 18 23 16 20 20 28 19 27 18 30`;

      const lines = rawData.split('\n');
      const students = [];

      lines.forEach(line => {
        if (line.trim().startsWith('FYBSCIT')) {
          const parts = line.trim().split(/\s+/);
          if (parts.length >= 24) {
            const rollNum = parts[1];
            
            // Find where marks start (after the name)
            let nameEndIndex = -1;
            for (let i = 2; i < parts.length; i++) {
              if (/^\d+$/.test(parts[i])) {
                nameEndIndex = i;
                break;
              }
            }
            
            if (nameEndIndex > 2) {
              const name = parts.slice(2, nameEndIndex).join(' ');
              const marks = parts.slice(nameEndIndex).map(mark => parseInt(mark) || 0);
              
              // Split marks into INT and EXT (alternating pattern)
              const intMarks = [];
              const extMarks = [];
              
              for (let i = 0; i < marks.length; i += 2) {
                intMarks.push(marks[i] || 0);
                extMarks.push(marks[i + 1] || 0);
              }
              
              const totalMarks = marks.reduce((sum, mark) => sum + mark, 0);
              const maxPossibleMarks = 660; // 22 subjects × 30 marks each
              const percentage = ((totalMarks / maxPossibleMarks) * 100).toFixed(2);
              
              students.push({
                rollNumber: rollNum,
                name: name.replace(/^\//, ''), // Remove leading slash if present
                intMarks,
                extMarks,
                totalMarks,
                percentage: parseFloat(percentage),
                subjectTotals: intMarks.map((int, idx) => int + (extMarks[idx] || 0))
              });
            }
          }
        }
      });

      // Sort by total marks and add rank
      students.sort((a, b) => b.totalMarks - a.totalMarks);
      students.forEach((student, index) => {
        student.rank = index + 1;
      });

      setStudentData(students);
    };

    parseStudentData();
  }, []);

  const handleSearch = () => {
    setError('');
    const student = studentData.find(s => s.rollNumber === rollNumber.toString());
    
    if (student) {
      setSelectedStudent(student);
    } else {
      setError(`Student with Roll Number ${rollNumber} not found`);
      setSelectedStudent(null);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const getGrade = (marks) => {
    if (marks >= 27) return { grade: 'A+', color: 'text-green-600' };
    if (marks >= 24) return { grade: 'A', color: 'text-green-500' };
    if (marks >= 21) return { grade: 'B+', color: 'text-blue-600' };
    if (marks >= 18) return { grade: 'B', color: 'text-blue-500' };
    if (marks >= 15) return { grade: 'C+', color: 'text-yellow-600' };
    if (marks >= 12) return { grade: 'C', color: 'text-yellow-500' };
    if (marks >= 9) return { grade: 'D', color: 'text-orange-500' };
    return { grade: 'F', color: 'text-red-500' };
  };

  return (
    <div className="max-w-7xl mx-auto p-6 bg-gray-50 min-h-screen">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-blue-800 mb-2">
          BSCIT Student Details Search
        </h1>
        <p className="text-gray-600">Enter roll number to view complete student details</p>
      </div>

      {/* Search Section */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
          <div className="flex-1 max-w-md">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Roll Number
            </label>
            <input
              type="number"
              value={rollNumber}
              onChange={(e) => setRollNumber(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Enter roll number (e.g., 1, 21, 49)"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
            />
          </div>
          <button
            onClick={handleSearch}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2 transition-colors"
          >
            <Search size={20} />
            Search
          </button>
        </div>
        
        {error && (
          <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg text-center">
            {error}
          </div>
        )}
      </div>

      {/* Student Details */}
      {selectedStudent && (
        <div className="space-y-6">
          {/* Basic Info Card */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-blue-100 p-3 rounded-full">
                <User size={32} className="text-blue-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">{selectedStudent.name}</h2>
                <p className="text-gray-600">Roll Number: FYBSCIT {selectedStudent.rollNumber}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4 rounded-lg text-center">
                <Award size={24} className="mx-auto mb-2" />
                <div className="text-2xl font-bold">#{selectedStudent.rank}</div>
                <div className="text-sm opacity-90">Class Rank</div>
              </div>
              
              <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-4 rounded-lg text-center">
                <Calculator size={24} className="mx-auto mb-2" />
                <div className="text-2xl font-bold">{selectedStudent.totalMarks}</div>
                <div className="text-sm opacity-90">Total Marks</div>
              </div>
              
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-4 rounded-lg text-center">
                <TrendingUp size={24} className="mx-auto mb-2" />
                <div className="text-2xl font-bold">{selectedStudent.percentage}%</div>
                <div className="text-sm opacity-90">Percentage</div>
              </div>
              
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-4 rounded-lg text-center">
                <BookOpen size={24} className="mx-auto mb-2" />
                <div className="text-2xl font-bold">660</div>
                <div className="text-sm opacity-90">Max Marks</div>
              </div>
            </div>
          </div>

          {/* Subject-wise Details */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <BookOpen size={24} className="text-blue-600" />
              Subject-wise Performance
            </h3>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Subject</th>
                    <th className="border border-gray-300 px-4 py-3 text-center font-semibold">Internal</th>
                    <th className="border border-gray-300 px-4 py-3 text-center font-semibold">External</th>
                    <th className="border border-gray-300 px-4 py-3 text-center font-semibold">Total</th>
                    <th className="border border-gray-300 px-4 py-3 text-center font-semibold">Grade</th>
                  </tr>
                </thead>
                <tbody>
                  {subjects.map((subject, index) => {
                    const internal = selectedStudent.intMarks[index] || 0;
                    const external = selectedStudent.extMarks[index] || 0;
                    const total = internal + external;
                    const gradeInfo = getGrade(total);
                    
                    return (
                      <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                        <td className="border border-gray-300 px-4 py-3 font-medium">
                          {subject}
                        </td>
                        <td className="border border-gray-300 px-4 py-3 text-center">
                          <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                            {internal}/20
                          </span>
                        </td>
                        <td className="border border-gray-300 px-4 py-3 text-center">
                          <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                            {external}/30
                          </span>
                        </td>
                        <td className="border border-gray-300 px-4 py-3 text-center">
                          <span className="inline-block bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-bold">
                            {total}/50
                          </span>
                        </td>
                        <td className="border border-gray-300 px-4 py-3 text-center">
                          <span className={`font-bold text-lg ${gradeInfo.color}`}>
                            {gradeInfo.grade}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* Performance Analysis */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-6">Performance Analysis</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-700 mb-3">Highest Scoring Subjects</h4>
                <div className="space-y-2">
                  {selectedStudent.subjectTotals
                    .map((total, index) => ({ total, subject: subjects[index], index }))
                    .sort((a, b) => b.total - a.total)
                    .slice(0, 3)
                    .map(({ total, subject, index }) => (
                      <div key={index} className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                        <span className="font-medium text-green-800 text-sm">{subject}</span>
                        <span className="font-bold text-green-600">{total}/50</span>
                      </div>
                    ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-700 mb-3">Areas for Improvement</h4>
                <div className="space-y-2">
                  {selectedStudent.subjectTotals
                    .map((total, index) => ({ total, subject: subjects[index], index }))
                    .sort((a, b) => a.total - b.total)
                    .slice(0, 3)
                    .map(({ total, subject, index }) => (
                      <div key={index} className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                        <span className="font-medium text-red-800 text-sm">{subject}</span>
                        <span className="font-bold text-red-600">{total}/50</span>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentDetailsSystem;
