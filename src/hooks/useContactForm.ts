import { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const WEB3FORMS_ACCESS_KEY = 'bdfe870e-bb7a-4925-8984-ce9e6bb3cf27';

export const useContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Nome é obrigatório';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email é obrigatório';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Mensagem é obrigatória';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Mensagem muito curta (mínimo 10 caracteres)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Limpa erro do campo ao digitar
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const submitForm = async (): Promise<{ success: boolean; error?: string }> => {
    if (!validateForm()) {
      return { success: false, error: 'Preencha todos os campos corretamente' };
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: '📩 Nova mensagem do Portfólio - Alan Borges',
          from_name: 'Portfólio Alan Borges',
        }),
      });

      const result = await response.json();

      if (result.success) {
        setFormData({ name: '', email: '', message: '' });
        return { success: true };
      } else {
        throw new Error(result.message || 'Erro ao enviar');
      }
    } catch (error) {
      console.error('Erro ao enviar:', error);
      return {
        success: false,
        error: 'Não foi possível enviar. Tente novamente ou entre em contato via email.',
      };
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({ name: '', email: '', message: '' });
    setErrors({});
  };

  return {
    formData,
    isSubmitting,
    errors,
    handleChange,
    submitForm,
    resetForm,
  };
};
