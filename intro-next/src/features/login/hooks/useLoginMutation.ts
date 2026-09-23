import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { LoginAdminRequest } from '../validations/loginSchema';
import { loginApi } from '@/api/auth/loginApi';
import { useRouter } from 'next/navigation';

export function useLoginMutation(
  getValues: () => LoginAdminRequest,
) {
  const router = useRouter(); 
  const { mutate: loginAdminMutation, isPending } = useMutation({
    mutationFn: async () => {
      const { email, password } = getValues();
      await loginApi({email, password});
    },
    onSuccess: (res) => {
      toast.success('Authentication user successful');
      router.push('/');
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return {
    loginAdminMutation,
    isPending,
  };
}
