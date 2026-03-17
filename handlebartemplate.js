/**
 * MoneyLion — Auth0 Universal Login Page Template
 *
 * This is the outer HTML shell that wraps every ACUL screen.
 * The React app mounts inside {{{body}}}.
 *
 * Design: A fully-rendered MoneyLion app shell (header, blurred dashboard
 * background, recent activity) so the auth flow feels native to the product
 * rather than a standalone login page.
 */

const template = /* html */ `<!DOCTYPE html>
<html lang="en">
<head>
  {{{default_head_tags_start}}}
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>MoneyLion</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,300;0,14..32,400;0,14..32,500;0,14..32,600;0,14..32,700&display=swap" rel="stylesheet" />
  {{{default_head_tags_end}}}

  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --ml-bg:        #08121F;
      --ml-surface:   #0D1D30;
      --ml-card:      #112035;
      --ml-border:    rgba(255, 255, 255, 0.07);
      --ml-teal:      #4ED8C4;
      --ml-teal-dim:  rgba(78, 216, 196, 0.12);
      --ml-text:      #F0F4F8;
      --ml-muted:     #6B859E;
      --ml-green:     #2EC4A0;
      --ml-red:       #F06880;
      --ml-purple:    #C77DFF;
    }

    html, body {
      height: 100%;
      background: var(--ml-bg);
      font-family: 'Inter', ui-sans-serif, system-ui, sans-serif;
      color: var(--ml-text);
      -webkit-font-smoothing: antialiased;
    }

    /* ─── APP SHELL ──────────────────────────────────────────────── */
    .ml-shell {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      position: relative;
    }

    /* ─── HEADER ─────────────────────────────────────────────────── */
    .ml-header {
      position: fixed;
      top: 0; left: 0; right: 0;
      z-index: 10;
      height: 64px;
      display: flex;
      align-items: center;
      padding: 0 32px;
      background: rgba(8, 18, 31, 0.85);
      backdrop-filter: blur(12px);
      border-bottom: 1px solid var(--ml-border);
    }

    .ml-logo {
      display: flex;
      align-items: center;
      gap: 10px;
      text-decoration: none;
      flex-shrink: 0;
    }

    .ml-logo img {
      height: 28px;
      width: auto;
    }

    .ml-nav {
      display: flex;
      align-items: center;
      gap: 4px;
      margin-left: 40px;
      flex: 1;
    }

    .ml-nav a {
      padding: 6px 14px;
      border-radius: 8px;
      font-size: 14px;
      font-weight: 500;
      color: var(--ml-muted);
      text-decoration: none;
      pointer-events: none;
      transition: color 0.15s;
    }

    .ml-nav a.active {
      color: var(--ml-text);
      background: rgba(255, 255, 255, 0.06);
    }

    .ml-header-right {
      display: flex;
      align-items: center;
      gap: 16px;
      pointer-events: none;
    }

    .ml-icon-btn {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      background: rgba(255,255,255,0.05);
      border: 1px solid var(--ml-border);
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--ml-muted);
    }

    .ml-avatar {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      background: linear-gradient(135deg, var(--ml-teal) 0%, #2EA89A 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 13px;
      font-weight: 600;
      color: #0A1628;
      filter: blur(3px);
    }

    /* ─── DASHBOARD BACKGROUND ───────────────────────────────────── */
    .ml-dashboard {
      position: fixed;
      inset: 64px 0 0 0;
      padding: 32px;
      overflow: hidden;
      filter: blur(3px) brightness(0.35);
      pointer-events: none;
      user-select: none;
    }

    .ml-dashboard-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: auto auto;
      gap: 16px;
      max-width: 1100px;
    }

    .ml-dash-card {
      background: var(--ml-card);
      border: 1px solid var(--ml-border);
      border-radius: 16px;
      padding: 24px;
    }

    .ml-dash-card .label {
      font-size: 12px;
      font-weight: 500;
      color: var(--ml-muted);
      text-transform: uppercase;
      letter-spacing: 0.06em;
      margin-bottom: 12px;
    }

    .ml-dash-card .amount {
      font-size: 28px;
      font-weight: 700;
      color: var(--ml-text);
      letter-spacing: -0.02em;
      margin-bottom: 6px;
    }

    .ml-dash-card .change {
      font-size: 13px;
      font-weight: 500;
      color: var(--ml-green);
      display: flex;
      align-items: center;
      gap: 4px;
    }

    .ml-dash-card .change.neg { color: var(--ml-red); }

    .ml-dash-card .sub {
      font-size: 13px;
      color: var(--ml-muted);
      margin-top: 4px;
    }

    /* Credit card chip */
    .ml-card-chip {
      width: 32px;
      height: 24px;
      background: linear-gradient(135deg, #D4AF37 0%, #F5D060 50%, #B8901A 100%);
      border-radius: 4px;
      margin-bottom: 24px;
    }

    .ml-card-number {
      font-size: 14px;
      font-weight: 500;
      color: var(--ml-muted);
      letter-spacing: 0.12em;
      margin-bottom: 4px;
    }

    .ml-card-limit {
      font-size: 13px;
      color: var(--ml-muted);
    }

    .ml-card-limit span {
      color: var(--ml-teal);
      font-weight: 600;
    }

    /* Chart card spans 2 cols */
    .ml-chart-card {
      grid-column: span 2;
      background: var(--ml-card);
      border: 1px solid var(--ml-border);
      border-radius: 16px;
      padding: 24px;
    }

    .ml-chart-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 20px;
    }

    .ml-chart-header .title {
      font-size: 15px;
      font-weight: 600;
    }

    .ml-chart-header .period {
      font-size: 12px;
      color: var(--ml-muted);
      background: rgba(255,255,255,0.05);
      padding: 4px 12px;
      border-radius: 20px;
    }

    /* Transactions card */
    .ml-transactions {
      background: var(--ml-card);
      border: 1px solid var(--ml-border);
      border-radius: 16px;
      padding: 24px;
    }

    .ml-transactions .title {
      font-size: 15px;
      font-weight: 600;
      margin-bottom: 18px;
    }

    .ml-tx-item {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 10px 0;
      border-bottom: 1px solid var(--ml-border);
    }

    .ml-tx-item:last-child { border-bottom: none; }

    .ml-tx-icon {
      width: 36px;
      height: 36px;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 16px;
      flex-shrink: 0;
    }

    .ml-tx-info { flex: 1; }
    .ml-tx-name { font-size: 13px; font-weight: 500; }
    .ml-tx-date { font-size: 11px; color: var(--ml-muted); margin-top: 2px; }

    .ml-tx-amount {
      font-size: 14px;
      font-weight: 600;
    }

    .ml-tx-amount.positive { color: var(--ml-green); }
    .ml-tx-amount.negative { color: var(--ml-text); }

    /* ─── AUTH OVERLAY ───────────────────────────────────────────── */
    .ml-auth-overlay {
      position: fixed;
      inset: 64px 0 0 0;
      z-index: 20;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 24px;
      background: rgba(8, 18, 31, 0.6);
    }

    .ml-auth-container {
      width: 100%;
      max-width: 480px;
    }

    /* Ensure the React app fills the container cleanly */
    .ml-auth-container > div {
      width: 100% !important;
    }
  </style>
</head>
<body>
  <div class="ml-shell">

    <!-- ── Header ──────────────────────────────────────────────── -->
    <header class="ml-header">
      <a class="ml-logo" href="#" tabindex="-1">
        <img
          src="https://cdn.prod.website-files.com/65c76d4633ca994639a589c7/6719893ea0dd924749b86f18_moneylion-logo.png"
          alt="MoneyLion"
        />
      </a>

      <nav class="ml-nav" aria-hidden="true">
        <a href="#" class="active">Dashboard</a>
        <a href="#">Invest</a>
        <a href="#">Borrow</a>
        <a href="#">Rewards</a>
        <a href="#">More</a>
      </nav>

      <div class="ml-header-right" aria-hidden="true">
        <!-- Bell -->
        <div class="ml-icon-btn">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
            <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
          </svg>
        </div>
        <!-- Avatar -->
        <div class="ml-avatar">JD</div>
      </div>
    </header>

    <!-- ── Blurred Dashboard Background ───────────────────────── -->
    <div class="ml-dashboard" aria-hidden="true">
      <div class="ml-dashboard-grid">

        <!-- Total Balance -->
        <div class="ml-dash-card">
          <div class="label">Total Balance</div>
          <div class="amount">$24,831.50</div>
          <div class="change">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="18 15 12 9 6 15"/></svg>
            +$420.00 (2.4%) this month
          </div>
        </div>

        <!-- Investment Portfolio -->
        <div class="ml-dash-card">
          <div class="label">Investment Portfolio</div>
          <div class="amount">$8,420.00</div>
          <div class="change">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="18 15 12 9 6 15"/></svg>
            +12.3% YTD
          </div>
          <div class="sub">Managed · Auto-invest on</div>
        </div>

        <!-- Credit Card -->
        <div class="ml-dash-card">
          <div class="ml-card-chip"></div>
          <div class="ml-card-number">•••• •••• •••• 4521</div>
          <div class="ml-card-limit">Available credit: <span>$2,500.00</span></div>
          <div class="sub" style="margin-top:12px">MoneyLion Visa® Credit Builder</div>
        </div>

        <!-- Earnings Chart -->
        <div class="ml-chart-card">
          <div class="ml-chart-header">
            <span class="title">Earnings Overview</span>
            <span class="period">Last 6 months</span>
          </div>
          <svg viewBox="0 0 540 120" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;overflow:visible">
            <defs>
              <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="#4ED8C4" stop-opacity="0.25"/>
                <stop offset="100%" stop-color="#4ED8C4" stop-opacity="0"/>
              </linearGradient>
            </defs>
            <!-- Grid lines -->
            <line x1="0" y1="30" x2="540" y2="30" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>
            <line x1="0" y1="60" x2="540" y2="60" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>
            <line x1="0" y1="90" x2="540" y2="90" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>
            <!-- Area fill -->
            <path d="M0 90 C40 85 80 72 130 65 C180 58 210 70 260 52 C310 34 350 45 400 28 C430 18 480 12 540 8 L540 120 L0 120 Z" fill="url(#chartGrad)"/>
            <!-- Line -->
            <path d="M0 90 C40 85 80 72 130 65 C180 58 210 70 260 52 C310 34 350 45 400 28 C430 18 480 12 540 8" stroke="#4ED8C4" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
            <!-- Last data point dot -->
            <circle cx="540" cy="8" r="4" fill="#4ED8C4"/>
            <!-- Month labels -->
            <text x="0"   y="115" font-size="10" fill="rgba(255,255,255,0.3)" font-family="Inter,sans-serif">Jul</text>
            <text x="98"  y="115" font-size="10" fill="rgba(255,255,255,0.3)" font-family="Inter,sans-serif">Aug</text>
            <text x="200" y="115" font-size="10" fill="rgba(255,255,255,0.3)" font-family="Inter,sans-serif">Sep</text>
            <text x="298" y="115" font-size="10" fill="rgba(255,255,255,0.3)" font-family="Inter,sans-serif">Oct</text>
            <text x="395" y="115" font-size="10" fill="rgba(255,255,255,0.3)" font-family="Inter,sans-serif">Nov</text>
            <text x="497" y="115" font-size="10" fill="rgba(255,255,255,0.3)" font-family="Inter,sans-serif">Dec</text>
          </svg>
        </div>

        <!-- Recent Transactions -->
        <div class="ml-transactions">
          <div class="title">Recent Transactions</div>

          <div class="ml-tx-item">
            <div class="ml-tx-icon" style="background:rgba(255,0,80,0.12)">🎬</div>
            <div class="ml-tx-info">
              <div class="ml-tx-name">Netflix</div>
              <div class="ml-tx-date">Dec 14 · Entertainment</div>
            </div>
            <div class="ml-tx-amount negative">−$15.99</div>
          </div>

          <div class="ml-tx-item">
            <div class="ml-tx-icon" style="background:rgba(46,196,160,0.12)">💼</div>
            <div class="ml-tx-info">
              <div class="ml-tx-name">Direct Deposit</div>
              <div class="ml-tx-date">Dec 13 · Income</div>
            </div>
            <div class="ml-tx-amount positive">+$2,400.00</div>
          </div>

          <div class="ml-tx-item">
            <div class="ml-tx-icon" style="background:rgba(78,216,196,0.12)">☕</div>
            <div class="ml-tx-info">
              <div class="ml-tx-name">Starbucks</div>
              <div class="ml-tx-date">Dec 12 · Food &amp; Drink</div>
            </div>
            <div class="ml-tx-amount negative">−$6.45</div>
          </div>
        </div>

      </div>
    </div>

    <!-- ── Auth Overlay ────────────────────────────────────────── -->
    <div class="ml-auth-overlay">
      <div class="ml-auth-container">
        {{{body}}}
      </div>
    </div>

  </div>
</body>
</html>`;

export default template;
