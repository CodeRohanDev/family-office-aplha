import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const dynamic = 'force-static'
export const alt = 'Family Office Alpha - Professional Family Office & Cybersecurity Advisory'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          fontFamily: 'system-ui',
        }}
      >
        {/* Background Pattern */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at 20% 80%, rgba(212, 175, 55, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(212, 175, 55, 0.1) 0%, transparent 50%)',
          }}
        />
        
        {/* Main Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '60px',
            zIndex: 1,
          }}
        >
          {/* Logo/Brand */}
          <div
            style={{
              width: '120px',
              height: '120px',
              background: 'linear-gradient(135deg, #d4af37 0%, #f4d03f 100%)',
              borderRadius: '24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '40px',
              boxShadow: '0 20px 40px rgba(212, 175, 55, 0.3)',
            }}
          >
            <span
              style={{
                fontSize: '48px',
                fontWeight: 'bold',
                color: '#1a1a2e',
                fontFamily: 'serif',
              }}
            >
              FOA
            </span>
          </div>

          {/* Title */}
          <h1
            style={{
              fontSize: '64px',
              fontWeight: 'bold',
              color: 'white',
              marginBottom: '20px',
              lineHeight: 1.1,
              fontFamily: 'serif',
            }}
          >
            Family Office Alpha
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontSize: '28px',
              color: '#e8e8e8',
              marginBottom: '30px',
              maxWidth: '800px',
              lineHeight: 1.3,
            }}
          >
            Professional Family Office & Cybersecurity Advisory
          </p>

          {/* Features */}
          <div
            style={{
              display: 'flex',
              gap: '40px',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div
                style={{
                  width: '12px',
                  height: '12px',
                  background: '#d4af37',
                  borderRadius: '50%',
                }}
              />
              <span style={{ color: '#d4af37', fontSize: '20px', fontWeight: '600' }}>
                Wealth Management
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div
                style={{
                  width: '12px',
                  height: '12px',
                  background: '#d4af37',
                  borderRadius: '50%',
                }}
              />
              <span style={{ color: '#d4af37', fontSize: '20px', fontWeight: '600' }}>
                Cybersecurity
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div
                style={{
                  width: '12px',
                  height: '12px',
                  background: '#d4af37',
                  borderRadius: '50%',
                }}
              />
              <span style={{ color: '#d4af37', fontSize: '20px', fontWeight: '600' }}>
                Advisory Services
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Brand */}
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            right: '60px',
            color: '#d4af37',
            fontSize: '18px',
            fontWeight: '600',
          }}
        >
          familyofficealpha.io
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}