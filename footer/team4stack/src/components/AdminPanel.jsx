import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './AdminPanel.css';

const AdminPanel = () => {
  const [links, setLinks] = useState([
    { id: 1, name: 'Privacy Policy', url: '/privacy' },
    { id: 2, name: 'Cookies Policy', url: '/cookies' },
    { id: 3, name: 'Contact Support', url: '/contact' },
    { id: 4, name: 'Developers', url: '/developers' },
    { id: 5, name: 'Help Center', url: '/help' },
    { id: 6, name: 'Terms & Conditions', url: '/terms' }
  ]);

  const [newLink, setNewLink] = useState({ name: '', url: '' });
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({ name: '', url: '' });

  const handleAddLink = (e) => {
    e.preventDefault();
    if (newLink.name && newLink.url) {
      setLinks([...links, { id: Date.now(), name: newLink.name, url: newLink.url }]);
      setNewLink({ name: '', url: '' });
    }
  };

  const handleDeleteLink = (id) => {
    setLinks(links.filter(link => link.id !== id));
  };

  const handleEditLink = (link) => {
    setEditingId(link.id);
    setEditForm({ name: link.name, url: link.url });
  };

  const handleUpdateLink = (e) => {
    e.preventDefault();
    if (editForm.name && editForm.url) {
      setLinks(links.map(link => 
        link.id === editingId 
          ? { ...link, name: editForm.name, url: editForm.url } 
          : link
      ));
      setEditingId(null);
      setEditForm({ name: '', url: '' });
    }
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setEditForm({ name: '', url: '' });
  };

  return (
    <div className="admin-panel">
      <div className="admin-header">
        <h1>Team4Stack Admin Panel</h1>
        <p>Manage your website footer links and content</p>
      </div>

      <div className="admin-content">
        <div className="links-management">
          <h2>Footer Links Management</h2>
          
          {/* Add New Link Form */}
          <div className="form-section">
            <h3>Add New Link</h3>
            <form onSubmit={handleAddLink} className="link-form">
              <input
                type="text"
                placeholder="Link Name"
                value={newLink.name}
                onChange={(e) => setNewLink({ ...newLink, name: e.target.value })}
                required
              />
              <input
                type="text"
                placeholder="Link URL (e.g., /privacy)"
                value={newLink.url}
                onChange={(e) => setNewLink({ ...newLink, url: e.target.value })}
                required
              />
              <button type="submit">Add Link</button>
            </form>
          </div>

          {/* Links List */}
          <div className="links-list">
            <h3>Current Links</h3>
            {links.length === 0 ? (
              <p>No links available. Add your first link above.</p>
            ) : (
              <ul className="links-table">
                {links.map((link) => (
                  <li key={link.id} className="link-item">
                    {editingId === link.id ? (
                      <form onSubmit={handleUpdateLink} className="edit-form">
                        <input
                          type="text"
                          value={editForm.name}
                          onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                          required
                        />
                        <input
                          type="text"
                          value={editForm.url}
                          onChange={(e) => setEditForm({ ...editForm, url: e.target.value })}
                          required
                        />
                        <div className="edit-actions">
                          <button type="submit">Save</button>
                          <button type="button" onClick={handleCancelEdit}>Cancel</button>
                        </div>
                      </form>
                    ) : (
                      <div className="link-info">
                        <span className="link-name">{link.name}</span>
                        <span className="link-url">{link.url}</span>
                        <div className="link-actions">
                          <button onClick={() => handleEditLink(link)}>Edit</button>
                          <button onClick={() => handleDeleteLink(link.id)}>Delete</button>
                        </div>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        
        <div className="admin-footer">
          <Link to="/" className="back-link">← Back to Home</Link>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;