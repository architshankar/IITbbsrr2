
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';

const Verify = () => {
  const [certificateId, setCertificateId] = useState('');
  const [verificationResult, setVerificationResult] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleVerify = async () => {
    if (!certificateId.trim()) {
      toast.error('Please enter a certificate ID');
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      // Mock verification result
      const mockResult = {
        isValid: true,
        studentName: 'John Doe',
        program: 'Full Stack Development',
        completionDate: '2024-01-15',
        grade: 'A+',
        skills: ['React', 'Node.js', 'MongoDB', 'Express.js'],
      };
      
      setVerificationResult(mockResult);
      setIsLoading(false);
      toast.success('Certificate verified successfully!');
    }, 2000);
  };

  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Certificate <span className="gradient-text">Verification</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Verify the authenticity of Inlighn Tech certificates and achievements.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Verification Form */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="glass-effect border-white/20">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-bold text-white">
                    Enter Certificate ID
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    Enter the certificate ID to verify its authenticity
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex gap-4">
                    <Input
                      placeholder="Enter certificate ID (e.g., INLG-2024-001)"
                      value={certificateId}
                      onChange={(e) => setCertificateId(e.target.value)}
                      className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                    />
                    <Button
                      onClick={handleVerify}
                      disabled={isLoading}
                      className="bg-gradient-primary hover:bg-primary-dark text-white px-8"
                    >
                      {isLoading ? 'Verifying...' : 'Verify'}
                    </Button>
                  </div>
                  
                  {/* Verification Result */}
                  {verificationResult && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="mt-8"
                    >
                      <Card className="glass-effect border-green-500/50 bg-green-500/10">
                        <CardHeader>
                          <CardTitle className="text-green-400 flex items-center gap-2">
                            ✅ Certificate Valid
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <p className="text-sm text-gray-400">Student Name</p>
                              <p className="text-white font-semibold">{verificationResult.studentName}</p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-400">Program</p>
                              <p className="text-white font-semibold">{verificationResult.program}</p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-400">Completion Date</p>
                              <p className="text-white font-semibold">{verificationResult.completionDate}</p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-400">Grade</p>
                              <p className="text-white font-semibold">{verificationResult.grade}</p>
                            </div>
                          </div>
                          
                          <div>
                            <p className="text-sm text-gray-400 mb-2">Skills Acquired</p>
                            <div className="flex flex-wrap gap-2">
                              {verificationResult.skills.map((skill: string, idx: number) => (
                                <span
                                  key={idx}
                                  className="px-3 py-1 bg-gradient-primary rounded-full text-sm text-white"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Information Section */}
      <section className="py-20 bg-navy-dark">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold mb-6">
                About <span className="gradient-text">Our Certificates</span>
              </h2>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔒</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Secure & Authentic</h3>
                <p className="text-gray-300">
                  All certificates are digitally signed and tamper-proof
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌐</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Industry Recognized</h3>
                <p className="text-gray-300">
                  Accepted by leading tech companies worldwide
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Instant Verification</h3>
                <p className="text-gray-300">
                  Real-time verification with detailed information
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Verify;
