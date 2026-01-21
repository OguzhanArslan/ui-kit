import { Box } from '@/components/box';
import { Button } from '@/components/button';
import { Checkbox } from '@/components/checkbox';
import { BrandContent } from '@/components/decorative/brandContent';
import { CompassAnimation } from '@/components/decorative/compassAnimation';
import { FormGroup } from '@/components/formgroup';
import { Grid } from '@/components/grid';
import { Input } from '@/components/input';
import { Label } from '@/components/label';
import { AuthLayout } from '@/components/layout/authLayout';

export interface LoginPageProps {
  title?: string;
  subtitle?: string;
  footerText?: string;
  isLoading?: boolean;
  brandTitle?: string;
  brandSubtitle?: string;
}

export function LoginPage({
  title = 'Hoş Geldiniz',
  subtitle = 'Hesabınıza giriş yapın',
  footerText = '© 2024 Tüm hakları saklıdır.',
  isLoading = false,
  brandTitle = 'CARİ PUSULA',
  brandSubtitle = 'Kaosu bırak, düzene geç.',
}: LoginPageProps) {
  return (
    <AuthLayout>
      <AuthLayout.Left>
        <AuthLayout.Header title={title} subtitle={subtitle} />

        <Box>
          <Grid cols={1} gap="lg">
            <FormGroup>
              <Label htmlFor="email">E-Posta</Label>
              <Input
                type="email"
                name="email"
                onChange={() => {}}
                disabled={isLoading}
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="password">Şifre</Label>
              <Input
                type="password"
                name="password"
                onChange={() => {}}
                disabled={isLoading}
              />
            </FormGroup>

            <Grid justifyItems="between" cols={2}>
              <Checkbox
                name="remember"
                label="Beni Hatırla"
                checked={false}
                onChange={() => {}}
                disabled={isLoading}
              />
            </Grid>

            <Button
              label="Giriş Yap"
              isFullWidth
              isLoading={isLoading}
              onClick={() => {}}
            />
          </Grid>
        </Box>

        <AuthLayout.Footer>{footerText}</AuthLayout.Footer>
      </AuthLayout.Left>

      <AuthLayout.Right>
        <CompassAnimation />
        <BrandContent title={brandTitle} subtitle={brandSubtitle} />
      </AuthLayout.Right>
    </AuthLayout>
  );
}

export default LoginPage;
