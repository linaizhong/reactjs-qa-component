import React, { useState } from 'react';
import { QAEditor, QAPlayer, MEDIA_TYPES } from 'react-qa-component';

function App() {
  const [view, setView] = useState('home'); // home, create, display
  const [qaList, setQaList] = useState([]);
  const [currentQA, setCurrentQA] = useState(null);
  const [editingQA, setEditingQA] = useState(null);

  // Handle saving Q&A from editor
  const handleSaveQA = (qaData) => {
    if (editingQA) {
      // Update existing Q&A
      setQaList(qaList.map(qa => 
        qa.id === editingQA.id ? { ...qaData, id: editingQA.id } : qa
      ));
      setEditingQA(null);
    } else {
      // Add new Q&A
      const newQA = {
        ...qaData,
        id: Date.now(),
        createdAt: new Date().toISOString()
      };
      setQaList([...qaList, newQA]);
    }
    setView('home');
  };

  // Handle editing Q&A
  const handleEditQA = (qa) => {
    setEditingQA(qa);
    setView('create');
  };

  // Handle viewing Q&A
  const handleViewQA = (qa) => {
    setCurrentQA(qa);
    setView('display');
  };

  // Handle deleting Q&A
  const handleDeleteQA = (qaId) => {
    if (window.confirm('Are you sure you want to delete this Q&A?')) {
      setQaList(qaList.filter(qa => qa.id !== qaId));
    }
  };

  // Get display text for media
  const getMediaPreview = (media) => {
    if (media.content) {
      return media.content.length > 50 
        ? `${media.content.substring(0, 50)}...` 
        : media.content;
    }
    if (media.file) {
      return `File: ${media.file.name}`;
    }
    return 'No content';
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f3f4f6', padding: '2rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <header style={{ 
          backgroundColor: 'white', 
          padding: '1.5rem', 
          borderRadius: '0.5rem',
          marginBottom: '2rem',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
        }}>
          <h1 style={{ margin: 0, fontSize: '2rem', fontWeight: 700, color: '#111827' }}>
            Q&A Component Demo
          </h1>
          <p style={{ margin: '0.5rem 0 0 0', color: '#6b7280' }}>
            Create, edit, and display questions with multimedia answers
          </p>
        </header>

        {/* Home View */}
        {view === 'home' && (
          <div>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              marginBottom: '1.5rem'
            }}>
              <h2 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 600 }}>
                My Q&A Collection ({qaList.length})
              </h2>
              <button
                onClick={() => {
                  setEditingQA(null);
                  setView('create');
                }}
                style={{
                  padding: '0.75rem 1.5rem',
                  backgroundColor: '#3b82f6',
                  color: 'white',
                  border: 'none',
                  borderRadius: '0.375rem',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  cursor: 'pointer'
                }}
              >
                Create New Q&A
              </button>
            </div>

            {qaList.length === 0 ? (
              <div style={{
                backgroundColor: 'white',
                padding: '3rem',
                borderRadius: '0.5rem',
                textAlign: 'center',
                boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
              }}>
                <p style={{ color: '#6b7280', fontSize: '1.125rem', margin: 0 }}>
                  No Q&A items yet. Create your first one!
                </p>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {qaList.map(qa => (
                  <div
                    key={qa.id}
                    style={{
                      backgroundColor: 'white',
                      padding: '1.5rem',
                      borderRadius: '0.5rem',
                      boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                      borderLeft: '4px solid #3b82f6'
                    }}
                  >
                    <div style={{ 
                      display: 'flex', 
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      marginBottom: '1rem'
                    }}>
                      <div style={{ flex: 1 }}>
                        <div style={{ 
                          display: 'flex', 
                          alignItems: 'center', 
                          gap: '0.5rem',
                          marginBottom: '0.5rem'
                        }}>
                          <span style={{
                            fontSize: '0.75rem',
                            fontWeight: 600,
                            color: '#1e40af',
                            backgroundColor: '#dbeafe',
                            padding: '0.25rem 0.75rem',
                            borderRadius: '9999px',
                            textTransform: 'uppercase'
                          }}>
                            {qa.question.type}
                          </span>
                          <span style={{ fontSize: '0.875rem', color: '#6b7280' }}>
                            {qa.answers.length} answers
                          </span>
                        </div>
                        <p style={{ 
                          margin: 0, 
                          color: '#374151',
                          fontSize: '0.875rem',
                          lineHeight: 1.5
                        }}>
                          {getMediaPreview(qa.question)}
                        </p>
                      </div>
                      
                      <div style={{ display: 'flex', gap: '0.5rem', marginLeft: '1rem' }}>
                        <button
                          onClick={() => handleViewQA(qa)}
                          style={{
                            padding: '0.5rem 1rem',
                            backgroundColor: '#10b981',
                            color: 'white',
                            border: 'none',
                            borderRadius: '0.375rem',
                            fontSize: '0.875rem',
                            cursor: 'pointer'
                          }}
                        >
                          View
                        </button>
                        <button
                          onClick={() => handleEditQA(qa)}
                          style={{
                            padding: '0.5rem 1rem',
                            backgroundColor: '#f59e0b',
                            color: 'white',
                            border: 'none',
                            borderRadius: '0.375rem',
                            fontSize: '0.875rem',
                            cursor: 'pointer'
                          }}
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDeleteQA(qa.id)}
                          style={{
                            padding: '0.5rem 1rem',
                            backgroundColor: '#ef4444',
                            color: 'white',
                            border: 'none',
                            borderRadius: '0.375rem',
                            fontSize: '0.875rem',
                            cursor: 'pointer'
                          }}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Create/Edit View */}
        {view === 'create' && (
          <div>
            <button
              onClick={() => {
                setEditingQA(null);
                setView('home');
              }}
              style={{
                padding: '0.5rem 1rem',
                backgroundColor: '#6b7280',
                color: 'white',
                border: 'none',
                borderRadius: '0.375rem',
                fontSize: '0.875rem',
                marginBottom: '1rem',
                cursor: 'pointer'
              }}
            >
              ← Back to List
            </button>
            
            <QAEditor
              initialData={editingQA}
              onSave={handleSaveQA}
              onCancel={() => {
                setEditingQA(null);
                setView('home');
              }}
            />
          </div>
        )}

        {/* Display View */}
        {view === 'display' && currentQA && (
          <div>
            <button
              onClick={() => {
                setCurrentQA(null);
                setView('home');
              }}
              style={{
                padding: '0.5rem 1rem',
                backgroundColor: '#6b7280',
                color: 'white',
                border: 'none',
                borderRadius: '0.375rem',
                fontSize: '0.875rem',
                marginBottom: '1rem',
                cursor: 'pointer'
              }}
            >
              ← Back to List
            </button>
            
            <QAPlayer
              qaData={currentQA}
              showAnswersInitially={false}
              title="Question & Answer"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;