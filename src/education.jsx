import React from 'react';

export default function Education() {
    return (
        <div className="page-container">
            <div className="page-header">
                <h1>Education & Qualifications</h1>
            </div>
            
            <div className="page-content">
                <div 
                    className="education-timeline"
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        gap: '0.8rem',
                        marginBottom: '3rem',
                        maxWidth: '100%',
                        overflow: 'visible'
                    }}
                >
                    {/* Current Program */}
                    <div 
                        className="education-item current"
                        style={{
                            backgroundColor: 'white',
                            borderRadius: '1rem',
                            padding: '1.2rem',
                            borderLeft: '4px solid #f59e0b',
                            boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
                            border: '1px solid #e2e8f0',
                            position: 'relative',
                            marginBottom: '1rem',
                            background: 'linear-gradient(135deg, #fff9f0 0%, white 100%)',
                            minHeight: '350px',
                            flex: '1',
                            maxWidth: '32%'
                        }}
                    >
                        <div 
                            className="education-badge"
                            style={{
                                position: 'absolute',
                                top: '-10px',
                                right: '2rem',
                                background: '#f59e0b',
                                color: 'white',
                                padding: '0.5rem 1rem',
                                borderRadius: '1rem',
                                fontSize: '0.8rem',
                                fontWeight: '600',
                                textTransform: 'uppercase'
                            }}
                        >
                            Current
                        </div>
                        <div 
                            className="education-header"
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'flex-start',
                                marginBottom: '1rem',
                                flexWrap: 'wrap',
                                gap: '1rem'
                            }}
                        >
                            <h2 style={{color: '#1e293b', marginBottom: '0.5rem', flex: '1', fontSize: '1.2rem', lineHeight: '1.2'}}>
                                Health Informatics Technology (Co-op) Advanced Diploma
                            </h2>
                            <span 
                                className="date"
                                style={{
                                    backgroundColor: '#2563eb',
                                    color: 'white',
                                    padding: '0.5rem 1rem',
                                    borderRadius: '0.5rem',
                                    fontWeight: '500',
                                    fontSize: '0.9rem',
                                    whiteSpace: 'nowrap'
                                }}
                            >
                                Jan. 2025 - Present
                            </span>
                        </div>
                        <p className="institution">🏫 Centennial College, Toronto, ON</p>
                        <div className="education-details">
                            <p>Advanced diploma program focusing on the intersection of healthcare and information technology.</p>
                        </div>
                    </div>

                    {/* Durham College */}
                    <div 
                        className="education-item"
                        style={{
                            backgroundColor: 'white',
                            borderRadius: '1rem',
                            padding: '1.2rem',
                            borderLeft: '4px solid #2563eb',
                            boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
                            border: '1px solid #e2e8f0',
                            position: 'relative',
                            marginBottom: '1rem',
                            minHeight: '350px',
                            flex: '1',
                            maxWidth: '32%'
                        }}
                    >
                        <div 
                            className="education-header"
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'flex-start',
                                marginBottom: '1rem',
                                flexWrap: 'wrap',
                                gap: '1rem'
                            }}
                        >
                            <h2 style={{color: '#1e293b', marginBottom: '0.5rem', flex: '1', fontSize: '1.2rem', lineHeight: '1.2'}}>
                                Emergency Service Fundamentals
                            </h2>
                            <span 
                                className="date"
                                style={{
                                    backgroundColor: '#2563eb',
                                    color: 'white',
                                    padding: '0.5rem 1rem',
                                    borderRadius: '0.5rem',
                                    fontWeight: '500',
                                    fontSize: '0.9rem',
                                    whiteSpace: 'nowrap'
                                }}
                            >
                                2014 - 2015
                            </span>
                        </div>
                        <p className="institution" style={{color: '#64748b', fontWeight: '600', marginBottom: '1.5rem', fontSize: '1.1rem'}}>
                            🏫 Durham College, Oshawa, ON
                        </p>
                        <div className="education-details" style={{marginTop: '1rem'}}>
                            <p style={{marginBottom: '1.5rem', lineHeight: '1.7', color: '#64748b'}}>
                                Comprehensive program covering emergency response protocols, medical procedures, and crisis management.
                            </p>

                        </div>
                    </div>

                    {/* High School */}
                    <div 
                        className="education-item"
                        style={{
                            backgroundColor: 'white',
                            borderRadius: '1rem',
                            padding: '1.2rem',
                            borderLeft: '4px solid #10b981',
                            boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
                            border: '1px solid #e2e8f0',
                            position: 'relative',
                            marginBottom: '1rem',
                            minHeight: '350px',
                            flex: '1',
                            maxWidth: '32%'
                        }}
                    >
                        <div 
                            className="education-header"
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'flex-start',
                                marginBottom: '1rem',
                                flexWrap: 'wrap',
                                gap: '1rem'
                            }}
                        >
                            <h2 style={{color: '#1e293b', marginBottom: '0.5rem', flex: '1', fontSize: '1.2rem', lineHeight: '1.2'}}>
                                High School Diploma
                            </h2>
                            <span 
                                className="date"
                                style={{
                                    backgroundColor: '#10b981',
                                    color: 'white',
                                    padding: '0.5rem 1rem',
                                    borderRadius: '0.5rem',
                                    fontWeight: '500',
                                    fontSize: '0.9rem',
                                    whiteSpace: 'nowrap'
                                }}
                            >
                                2010 - 2014
                            </span>
                        </div>
                        <p className="institution" style={{color: '#64748b', fontWeight: '600', marginBottom: '1.5rem', fontSize: '1.1rem'}}>
                            🏫 Notre Dame Catholic Secondary School, Ajax, ON
                        </p>
                        <div className="education-details" style={{marginTop: '1rem'}}>
                            <p style={{marginBottom: '1.5rem', lineHeight: '1.7', color: '#64748b'}}>
                                Completed secondary education with a focus on sciences and mathematics, laying the foundation for healthcare and technology studies.
                            </p>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}