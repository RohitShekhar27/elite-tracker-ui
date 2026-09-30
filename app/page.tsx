'use client';
import { useState } from 'react';

export default function Dashboard() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'ADSA Book Reading (Graph Algorithms)', category: 'M.Tech', done: false },
    { id: 2, title: 'Leetcode: 2 DP Problems (Optimal + Dry Run)', category: 'DSA', done: false },
    { id: 3, title: 'IoT Case Study Architecture Flowchart', category: 'M.Tech', done: false },
    { id: 4, title: 'Python OOPs Implementation', category: 'AI/ML', done: false },
  ]);

  const toggleTask = (id: number) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, done: !t.done } : t));
  };

  return (
    <div style={{ backgroundColor: '#0f172a', color: '#f8fafc', minHeight: '100vh', padding: '30px', fontFamily: 'sans-serif' }}>
      <header style={{ marginBottom: '30px', borderBottom: '1px solid #334155', paddingBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <div>
          <h1 style={{ fontSize: '2rem', color: '#3b82f6', marginBottom: '8px' }}>Professional Trajectory Architect</h1>
          <p style={{ color: '#94a3b8' }}>M.Tech CSE & SDE Intern Tracking Ecosystem</p>
        </div>
        <div>
          <span style={{ backgroundColor: '#1e40af', color: '#bfdbfe', padding: '6px 14px', borderRadius: '20px', fontSize: '0.85rem' }}>Sprint: Oct Week 1</span>
        </div>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginBottom: '30px' }}>
        
        <div style={{ backgroundColor: '#1e293b', padding: '20px', borderRadius: '12px', border: '1px solid #334155' }}>
          <h2 style={{ fontSize: '1.2rem', color: '#10b981', marginBottom: '15px' }}>🎓 Semester Progress</h2>
          <div style={{ marginBottom: '15px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', marginBottom: '5px' }}><span>ADSA (4 cr)</span><span>40%</span></div>
            <div style={{ height: '8px', backgroundColor: '#334155', borderRadius: '4px', overflow: 'hidden' }}><div style={{ height: '100%', backgroundColor: '#10b981', width: '40%' }}></div></div>
          </div>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', marginBottom: '5px' }}><span>Data Mining</span><span>25%</span></div>
            <div style={{ height: '8px', backgroundColor: '#334155', borderRadius: '4px', overflow: 'hidden' }}><div style={{ height: '100%', backgroundColor: '#10b981', width: '25%' }}></div></div>
          </div>
        </div>

        <div style={{ backgroundColor: '#1e293b', padding: '20px', borderRadius: '12px', border: '1px solid #334155' }}>
          <h2 style={{ fontSize: '1.2rem', color: '#c084fc', marginBottom: '15px' }}>💻 DSA Timeline</h2>
          <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.95rem', color: '#cbd5e1' }}>
            <li style={{ marginBottom: '10px', color: '#e879f9', fontWeight: 'bold' }}>✔ Arrays, Strings, T.C.</li>
            <li style={{ marginBottom: '10px' }}>○ Hashing, Two Pointers</li>
            <li style={{ marginBottom: '10px' }}>○ Binary Search, Recursion</li>
          </ul>
        </div>

        <div style={{ backgroundColor: '#1e293b', padding: '20px', borderRadius: '12px', border: '1px solid #334155' }}>
          <h2 style={{ fontSize: '1.2rem', color: '#fb923c', marginBottom: '15px' }}>🧠 AI Insights</h2>
          <p style={{ fontSize: '0.9rem', color: '#94a3b8', lineHeight: '1.5' }}>
            System Log: ADSA aur Data Mining ke books par focus badhayein. SDE mock interviews ke liye daily 2 medium LeetCode questions zaroori hain.
          </p>
        </div>

      </div>

      <div style={{ backgroundColor: '#1e293b', padding: '25px', borderRadius: '12px', border: '1px solid #334155' }}>
        <h2 style={{ fontSize: '1.3rem', color: '#3b82f6', marginBottom: '20px' }}>🚀 Daily Execution Engine</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {tasks.map(task => (
            <div key={task.id} 
                 onClick={() => toggleTask(task.id)}
                 style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '15px', borderRadius: '8px', border: '1px solid #334155', backgroundColor: task.done ? '#0f172a' : '#33415555', cursor: 'pointer', opacity: task.done ? 0.6 : 1 }}>
              <div style={{ width: '22px', height: '22px', borderRadius: '50%', border: '2px solid #94a3b8', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: task.done ? '#10b981' : 'transparent', borderColor: task.done ? '#10b981' : '#94a3b8', color: '#fff', fontSize: '12px' }}>
                {task.done ? '✓' : ''}
              </div>
              <div style={{ flexGrow: 1, fontWeight: 500 }}>{task.title}</div>
              <div style={{ fontSize: '0.8rem', padding: '4px 10px', backgroundColor: '#0f172a', borderRadius: '6px', color: '#94a3b8' }}>{task.category}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
