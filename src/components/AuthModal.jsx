import React, { useState } from 'react';
import { X, Lock, Mail, User, MapPin, Sparkles, LogIn, UserPlus, LogOut, Award, CheckCircle2, AlertCircle } from 'lucide-react';
import { REGIONS } from '../data/regions';
import { UI_STRINGS } from '../data/translations';

export default function AuthModal({ 
  isOpen, 
  onClose, 
  user, 
  onLogin, 
  onLogout, 
  lang = 'kn' 
}) {
  const [authMode, setAuthMode] = useState('login'); // 'login' | 'signup'
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    regionId: 'mysuru',
    district: 'Mysuru'
  });
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  if (!isOpen) return null;

  const t = UI_STRINGS[lang] || UI_STRINGS.kn;
  const isKn = lang === 'kn';

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errorMsg) setErrorMsg('');
  };

  const handleQuickDemoLogin = () => {
    const demoUser = {
      name: isKn ? 'ಅಭಿಷೇಕ್ ಕುಲಕರ್ಣಿ (ತೀರ್ಪುಗಾರ)' : 'Abhishek Kulkarni (Judge)',
      email: 'judge@kannadahackathon.org',
      regionId: 'uttara',
      regionName: isKn ? 'ಉತ್ತರ ಕರ್ನಾಟಕ' : 'North Karnataka',
      district: 'Dharwad',
      avatarInitial: 'ಅ',
      badge: isKn ? 'ನಾಡ ಪ್ರೇಮಿ & ತೀರ್ಪುಗಾರ' : 'Dialect Scholar & Judge',
      contributionsCount: 8,
      joinedDate: 'October 2026'
    };

    onLogin(demoUser);
    setSuccessMsg(isKn ? 'ಡೆಮೊ ಖಾತೆಗೆ ಯಶಸ್ವಿಯಾಗಿ ಲಾಗಿನ್ ಆಗಿದೆ!' : 'Quick demo session successfully activated!');
    setTimeout(() => {
      setSuccessMsg('');
      onClose();
    }, 700);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg('');

    if (authMode === 'login') {
      if (!formData.email.trim() || !formData.password.trim()) {
        setErrorMsg(isKn ? 'ದಯವಿಟ್ಟು ಇಮೇಲ್ ಮತ್ತು ಪಾಸ್‌ವರ್ಡ್ ನಮೂದಿಸಿ.' : 'Please enter both email and password.');
        return;
      }
      
      const loggedUser = {
        name: formData.email.split('@')[0],
        email: formData.email.trim(),
        regionId: formData.regionId || 'mysuru',
        regionName: REGIONS[formData.regionId]?.name.split(' (')[0] || 'Karnataka',
        district: formData.district || 'Mysuru',
        avatarInitial: formData.email[0].toUpperCase(),
        badge: isKn ? 'ಮಾನ್ಯತೆ ಪಡೆದ ಕನ್ನಡಿಗ' : 'Verified Kannadiga',
        contributionsCount: 3,
        joinedDate: 'October 2026'
      };

      onLogin(loggedUser);
      setSuccessMsg(isKn ? 'ಯಶಸ್ವಿಯಾಗಿ ಲಾಗಿನ್ ಆಗಿದೆ!' : 'Logged in successfully!');
      setTimeout(() => {
        setSuccessMsg('');
        onClose();
      }, 700);

    } else {
      // Sign Up validation
      if (!formData.name.trim() || formData.name.trim().length < 2) {
        setErrorMsg(isKn ? 'ದಯವಿಟ್ಟು ಪೂರ್ಣ ಹೆಸರನ್ನು ನಮೂದಿಸಿ (ಕನಿಷ್ಠ ೨ ಅಕ್ಷರಗಳು).' : 'Please enter your full name (minimum 2 characters).');
        return;
      }
      if (!formData.email.trim() || !formData.email.includes('@')) {
        setErrorMsg(isKn ? 'ದಯವಿಟ್ಟು ಮಾನ್ಯ ಇಮೇಲ್ ವಿಳಾಸವನ್ನು ನಮೂದಿಸಿ.' : 'Please enter a valid email address.');
        return;
      }
      if (!formData.password || formData.password.length < 4) {
        setErrorMsg(isKn ? 'ಪಾಸ್‌ವರ್ಡ್ ಕನಿಷ್ಠ ೪ ಅಕ್ಷರಗಳನ್ನು ಹೊಂದಿರಬೇಕು.' : 'Password must be at least 4 characters.');
        return;
      }
      if (formData.password !== formData.confirmPassword) {
        setErrorMsg(isKn ? 'ಪಾಸ್‌ವರ್ಡ್‌ಗಳು ಹೊಂದಾಣಿಕೆಯಾಗುತ್ತಿಲ್ಲ.' : 'Passwords do not match.');
        return;
      }

      const reg = REGIONS[formData.regionId];
      const newUser = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        regionId: formData.regionId,
        regionName: isKn ? reg?.kannadaName : reg?.name.split(' (')[0],
        district: formData.district || 'Karnataka',
        avatarInitial: formData.name.trim()[0].toUpperCase(),
        badge: isKn ? 'ಹೊಸ ನುಡಿ ಸಂಶೋಧಕ' : 'New Dialect Explorer',
        contributionsCount: 1,
        joinedDate: 'October 2026'
      };

      onLogin(newUser);
      setSuccessMsg(isKn ? 'ನಿಮ್ಮ ಖಾತೆ ಯಶಸ್ವಿಯಾಗಿ ಸೃಷ್ಟಿಯಾಗಿದೆ!' : 'Account successfully created!');
      setTimeout(() => {
        setSuccessMsg('');
        onClose();
      }, 700);
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-[#0b0f17]/85 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-md bg-[#111726] border border-[#d4af37]/40 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden">
        
        {/* Background decorative zari flourish */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-radial from-[#d4af37]/15 to-transparent pointer-events-none rounded-bl-full" />
        <div className="absolute -bottom-8 -left-8 w-28 h-28 bg-radial from-[#D96B43]/15 to-transparent pointer-events-none rounded-tr-full" />

        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl text-[#94a3b8] hover:text-[#f8fafc] hover:bg-[#0b0f17] transition-colors"
          aria-label="Close authentication modal"
        >
          <X className="w-5 h-5" />
        </button>

        {user ? (
          /* Profile Card View when user is already authenticated */
          <div className="text-center py-2">
            <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-tr from-[#d4af37] via-[#D96B43] to-[#8B2635] flex items-center justify-center shadow-lg border-2 border-[#d4af37]/60">
              <span className="text-3xl font-black text-[#0b0f17] font-serif">
                {user.avatarInitial || 'ಕ'}
              </span>
            </div>

            <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-semibold bg-[#d4af37]/15 text-[#d4af37] border border-[#d4af37]/30 mb-2">
              <Award className="w-3.5 h-3.5" />
              {user.badge}
            </span>

            <h3 className="text-2xl font-bold text-[#f8fafc] font-serif">
              {user.name}
            </h3>
            <p className="text-xs text-[#94a3b8] mt-0.5 mb-6">
              {user.email}
            </p>

            {/* Profile Statistics Grid */}
            <div className="grid grid-cols-2 gap-3 mb-6 text-left">
              <div className="p-3 bg-[#0b0f17] rounded-xl border border-[#1e293b]">
                <span className="text-[10px] uppercase font-bold text-[#94a3b8] block">
                  {t.nativeZoneLabel}
                </span>
                <span className="text-xs sm:text-sm font-semibold text-[#d4af37] flex items-center gap-1 mt-0.5">
                  <MapPin className="w-3.5 h-3.5" />
                  {user.regionName} ({user.district})
                </span>
              </div>

              <div className="p-3 bg-[#0b0f17] rounded-xl border border-[#1e293b]">
                <span className="text-[10px] uppercase font-bold text-[#94a3b8] block">
                  {t.contributionsLabel}
                </span>
                <span className="text-xs sm:text-sm font-semibold text-[#f8fafc] flex items-center gap-1 mt-0.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
                  {user.contributionsCount} {isKn ? 'ನುಡಿಗಳು' : 'phrases'}
                </span>
              </div>
            </div>

            {/* Logout Action */}
            <div className="flex gap-2">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 py-2.5 rounded-xl bg-[#0b0f17] border border-[#1e293b] text-xs font-semibold text-[#cbd5e1] hover:text-[#f8fafc]"
              >
                {isKn ? 'ಮುಚ್ಚಿ' : 'Close'}
              </button>
              <button
                type="button"
                onClick={() => {
                  onLogout();
                  onClose();
                }}
                className="flex-1 py-2.5 rounded-xl bg-[#8B2635]/80 hover:bg-[#8B2635] text-xs font-bold text-[#f8fafc] flex items-center justify-center gap-1.5 transition-colors shadow-md"
              >
                <LogOut className="w-4 h-4" />
                <span>{t.logout}</span>
              </button>
            </div>
          </div>
        ) : (
          /* Login & Signup Form */
          <div>
            {/* Header Identity */}
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d4af37]/15 text-[#d4af37] text-xs font-bold mb-2 border border-[#d4af37]/30">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{isKn ? 'ಕನ್ನಡ ವೈವಿಧ್ಯ ಪಾಸ್‌ಪೋರ್ಟ್' : 'KannadaVaividhya Passport'}</span>
              </div>
              <h3 className="text-2xl font-black text-[#f8fafc] font-serif">
                {authMode === 'login' ? t.welcomeBack : t.createAccount}
              </h3>
              <p className="text-xs text-[#cbd5e1] mt-1 max-w-xs mx-auto">
                {t.authSubtitle}
              </p>
            </div>

            {/* 1-Click Demo Login Button for Judges */}
            <button
              type="button"
              onClick={handleQuickDemoLogin}
              className="w-full mb-5 py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#D96B43]/20 via-[#d4af37]/20 to-[#D96B43]/20 border border-[#d4af37]/50 text-[#d4af37] hover:bg-[#d4af37]/30 text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-sm active:scale-98"
            >
              <span>{t.demoLoginBtn}</span>
            </button>

            {/* Tab Switcher */}
            <div className="grid grid-cols-2 p-1 bg-[#0b0f17] rounded-xl border border-[#1e293b] mb-5">
              <button
                type="button"
                onClick={() => {
                  setAuthMode('login');
                  setErrorMsg('');
                }}
                className={`py-2 text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                  authMode === 'login'
                    ? 'bg-[#d4af37] text-[#0b0f17] shadow'
                    : 'text-[#94a3b8] hover:text-[#f8fafc]'
                }`}
              >
                <LogIn className="w-3.5 h-3.5" />
                <span>{t.login}</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  setAuthMode('signup');
                  setErrorMsg('');
                }}
                className={`py-2 text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                  authMode === 'signup'
                    ? 'bg-[#d4af37] text-[#0b0f17] shadow'
                    : 'text-[#94a3b8] hover:text-[#f8fafc]'
                }`}
              >
                <UserPlus className="w-3.5 h-3.5" />
                <span>{t.signup}</span>
              </button>
            </div>

            {/* Status Messages */}
            {errorMsg && (
              <div className="mb-4 p-3 rounded-xl bg-[#8B2635]/20 border border-[#8B2635]/50 text-red-300 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}
            {successMsg && (
              <div className="mb-4 p-3 rounded-xl bg-emerald-950/30 border border-emerald-500/50 text-emerald-300 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>{successMsg}</span>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-3.5 text-xs sm:text-sm">
              {authMode === 'signup' && (
                <div>
                  <label className="block text-xs font-semibold text-[#cbd5e1] mb-1">
                    {t.nameField} <span className="text-[#D96B43]">*</span>
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-2.5 w-4 h-4 text-[#94a3b8]" />
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder={isKn ? "ಉದಾ: ರಮೇಶ್ ಕುಮಾರ್" : "e.g. Ramesh Kumar"}
                      className="w-full bg-[#0b0f17] border border-[#1e293b] rounded-xl pl-9 pr-3 py-2 text-xs text-[#f8fafc] placeholder-[#94a3b8]/50 focus:outline-none focus:border-[#d4af37]"
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-xs font-semibold text-[#cbd5e1] mb-1">
                  {t.emailField} <span className="text-[#D96B43]">*</span>
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-2.5 w-4 h-4 text-[#94a3b8]" />
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="kannada@example.com"
                    className="w-full bg-[#0b0f17] border border-[#1e293b] rounded-xl pl-9 pr-3 py-2 text-xs text-[#f8fafc] placeholder-[#94a3b8]/50 focus:outline-none focus:border-[#d4af37]"
                  />
                </div>
              </div>

              {authMode === 'signup' && (
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-xs font-semibold text-[#cbd5e1] mb-1">
                      {t.districtField}
                    </label>
                    <select
                      value={formData.regionId}
                      onChange={(e) => handleInputChange('regionId', e.target.value)}
                      className="w-full bg-[#0b0f17] border border-[#1e293b] rounded-xl px-2.5 py-2 text-xs text-[#f8fafc]"
                    >
                      {Object.values(REGIONS).map((r) => (
                        <option key={r.id} value={r.id}>
                          {isKn ? r.kannadaName : r.name.split(' (')[0]}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#cbd5e1] mb-1">
                      {isKn ? 'ಜಿಲ್ಲೆ' : 'District'}
                    </label>
                    <input
                      type="text"
                      value={formData.district}
                      onChange={(e) => handleInputChange('district', e.target.value)}
                      placeholder={isKn ? "ಉದಾ: ಧಾರವಾಡ" : "e.g. Dharwad"}
                      className="w-full bg-[#0b0f17] border border-[#1e293b] rounded-xl px-3 py-2 text-xs text-[#f8fafc] placeholder-[#94a3b8]/50 focus:outline-none focus:border-[#d4af37]"
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-xs font-semibold text-[#cbd5e1] mb-1">
                  {t.passwordField} <span className="text-[#D96B43]">*</span>
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-2.5 w-4 h-4 text-[#94a3b8]" />
                  <input
                    type="password"
                    value={formData.password}
                    onChange={(e) => handleInputChange('password', e.target.value)}
                    placeholder="••••••••"
                    className="w-full bg-[#0b0f17] border border-[#1e293b] rounded-xl pl-9 pr-3 py-2 text-xs text-[#f8fafc] placeholder-[#94a3b8]/50 focus:outline-none focus:border-[#d4af37]"
                  />
                </div>
              </div>

              {authMode === 'signup' && (
                <div>
                  <label className="block text-xs font-semibold text-[#cbd5e1] mb-1">
                    {t.confirmPasswordField} <span className="text-[#D96B43]">*</span>
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-2.5 w-4 h-4 text-[#94a3b8]" />
                    <input
                      type="password"
                      value={formData.confirmPassword}
                      onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                      placeholder="••••••••"
                      className="w-full bg-[#0b0f17] border border-[#1e293b] rounded-xl pl-9 pr-3 py-2 text-xs text-[#f8fafc] placeholder-[#94a3b8]/50 focus:outline-none focus:border-[#d4af37]"
                    />
                  </div>
                </div>
              )}

              <button
                type="submit"
                className="w-full mt-4 py-2.5 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#E5A93C] text-[#0b0f17] font-bold text-xs sm:text-sm hover:brightness-110 shadow-lg shadow-[#d4af37]/20 transition-all active:scale-98"
              >
                {authMode === 'login' ? t.loginBtn : t.signupBtn}
              </button>
            </form>

            {/* Toggle Footer text */}
            <div className="text-center mt-4 text-xs text-[#94a3b8]">
              {authMode === 'login' ? (
                <span>
                  {t.dontHaveAccount}{' '}
                  <button
                    type="button"
                    onClick={() => {
                      setAuthMode('signup');
                      setErrorMsg('');
                    }}
                    className="text-[#d4af37] font-bold hover:underline"
                  >
                    {t.signup}
                  </button>
                </span>
              ) : (
                <span>
                  {t.alreadyHaveAccount}{' '}
                  <button
                    type="button"
                    onClick={() => {
                      setAuthMode('login');
                      setErrorMsg('');
                    }}
                    className="text-[#d4af37] font-bold hover:underline"
                  >
                    {t.login}
                  </button>
                </span>
              )}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
